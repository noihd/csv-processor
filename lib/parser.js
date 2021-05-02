const fs = require('fs')
const _ = require('lodash')
const chalk = require('chalk')
const csv = require('csv-parser')
const ora = require('ora')
const path = require('path')
const sqlHelper = require('mysql-generator')

const { execSync } = require('child_process')

const util = require('./util')()

const csvPath = path.resolve(path.join(__dirname, '../src', 'police_data_portal.csv'))
const headersPath = path.resolve(path.join(__dirname, '../src', 'police_data_portal_headers.txt'))

module.exports = () => {
  const getModel = (model, mapping, limit) => {
    // Create Progress Indicator
    const text = chalk.bold(`Parsing ${model}: ${chalk.reset('0 / 0')}`).concat(chalk.dim(' [Ctrl-C to Cancel]'))
    const spinner = ora(text)

    // Start Indicator
    spinner.start()

    // Track Moving Average to get Estimate for Completion
    let totalTime = 0

    // Track Unique ORI9 Keys
    let ori9 = [];

    // Get the Total Number of Rows ( minus header )
    const totalLines = parseInt(execSync(`wc -l < ${csvPath}`).toString().trim()) - 1

    const headers = Object.keys(mapping)
    let count = 0

    // Generate File Name
    const tableName = util.getTableName(model)
    const fileName = `${tableName}.sql`
    const sqlPath = path.resolve(path.join(__dirname, '../sql', fileName))

    /**
     * Custom Map Agency to SQL
     * @param {Object} filtered
     */
    const mapAgency = filtered => {
      // Create Object for Mapped Data
      let mappedData = {}

      // Loop through Headers and Process Each Cell
      headers.forEach(key => {
        mappedData[mapping[key].model_field] = util.convertType(key, filtered[key], mapping[key])
      })

      // Generate SQL from Mapped Data
      return util.prepSQL(sqlHelper.Insert.into(tableName).setFieldsRow(mappedData))
    }

    /**
     * Map Models that have 1:1 mappings to SQL
     * @param {Object} filtered
     */
     const mapModel = filtered => {
      // Create Object for Mapped Data
      let mappedData = {
        agency_id: filtered.agency_id
      }

      // Keep Track of Null Counts
      let nonNullCount = 0
      let totalCount = 0

      // Loop through Headers and Process Each Cell
      headers.forEach(key => {
        // Get Value for Mapped Data
        const value = util.convertType(key, filtered[key], mapping[key])

        // Set Mapped Key Value
        mappedData[mapping[key].model_field] = value

        // Check if we got Null Back
        if (value === null) {
          nonNullCount++
        }

        // Update Total Key Count
        totalCount++
      })

      // Generate SQL from Mapped Data ( skip if all keys were null )
      return (nonNullCount === totalCount) ? '' : util.prepSQL(sqlHelper.Insert.into(tableName).setFieldsRow(mappedData))
    }

    /**
     * Custom Map Model with Special Attributes to SQL
     * @param {Object} filtered
     */
    const mapModelSpecial = filtered => {
      // Loop through Headers and Process Each Cell
      headers.forEach(key => {
        // Create Object for Mapped Data
        let mappedData = {
          agency_id: filtered.agency_id
        }

        // Merge Custom Mapping data into Model
        mappedData = Object.assign(mappedData, mapping[key].data)

        // Get Value for Mapped Data
        const value = util.convertType(key, filtered[key], mapping[key])

        // Set Mapped Key Value
        mappedData[mapping[key].model_field] = value

        // Generate SQL from Mapped Data ( skip if all keys were null )
        const sql = (!value) ? '' : util.prepSQL(sqlHelper.Insert.into(tableName).setFieldsRow(mappedData))

        // Check that SQL was not empty
        if (sql && sql !== '') {
          fs.appendFileSync(sqlPath, sql)
        }
      })

      return true
    }

    // Loop through CSV File one line at a time
    return new Promise(resolve => {
      fs.createReadStream(csvPath)
        .pipe(csv())
        .on('data', data => {
          count++

          // Start tracking time
          let start = new Date().getTime()

          // Skip First Row of CSV Headers
          if (count === 1) {
            // Truncate File if Exists
            if (fs.existsSync(sqlPath)) {
              fs.truncateSync(sqlPath, 0)
            }

            // Write Out Initial SQL Code
            fs.appendFileSync(sqlPath, 'SET NAMES utf8mb4;\nSET FOREIGN_KEY_CHECKS = 0;\n\nBEGIN;\n\n')

            // Continue to Next Row
            return
          }

          // Add ORI9 for `agency_id`
          if (ori9.indexOf(data.XWK_1) === -1) {
            ori9.push(data.XWK_1)
          }

          // Remove Data Not Required for this Model
          const filtered = _.pickBy(data, function(value, key) {
            return headers.indexOf(key) !== -1
          })

          // Custom Mapping for Agency Models
          if (model === 'Agency') {
            fs.appendFileSync(sqlPath, mapAgency(filtered))
          }

          // Mapping for Models with 1:1 SQL Mapping
          if (model === 'AnnualOfficerDeaths' || model === 'Characteristics' || model === 'Crimes' || model === 'Gunshots' || model === 'FirearmLaws') {
            // Add Foreign Key Reference
            filtered.agency_id = ori9.indexOf(data.XWK_1) + 1

            // Generate SQL
            const sql = mapModel(filtered)

            // Check that SQL was not empty
            if (sql && sql !== '') {
              fs.appendFileSync(sqlPath, sql)
            }
          }

          // Custom Mapping for Complex Demographics Model
          if (model === 'AnnualDeaths' || model === 'Demographics') {
            // Add Foreign Key Reference
            filtered.agency_id = ori9.indexOf(data.XWK_1) + 1

            mapModelSpecial(filtered)
          }

          // Check if we have a limit, and if we have reached it
          if (limit && count > limit) {
            // Write out end of SQL file
            fs.appendFileSync(sqlPath, '\nCOMMIT;\n\nSET FOREIGN_KEY_CHECKS = 1;\n')
            spinner.succeed(`Export Complete: ./sql/${fileName}`)

            // Force termination of process
            process.exit()
          }

          // Start tracking time
          let stop = new Date().getTime()

          // Add Execution Time
          totalTime += (stop - start)

          // Calculate Time Remaining
          const remaining = (limit) ? (limit - count) : (totalLines - count)
          const time = util.msToTime(remaining * (totalTime / (count - 1)))

          // Update Progress
          const progress = (limit)
            ? `${chalk.reset.cyan(count.toLocaleString())} / ${chalk.reset(limit.toLocaleString())}`
            : `${chalk.reset.cyan(count.toLocaleString())} / ${chalk.reset(totalLines.toLocaleString())}`

          // Output Progress
          spinner.text = chalk.bold(`Parsing ${model}: ${progress}`).concat(chalk.dim(` ‣ RUN: ${util.msToTime(totalTime)} ‣ ETA: ${time}  [Ctrl-C to Cancel]`))

          resolve()
        })
        .on('end', () => {
          // If no limit was provided, wait until we've reached the end
          fs.appendFileSync(sqlPath, '\nCOMMIT;\n\nSET FOREIGN_KEY_CHECKS = 1;\n')
          spinner.succeed(`Export Complete: ./sql/${fileName}`)
        })
    })
  }

  /**
   * Export CSV Columns
   */
   const getColumns = () => {
    return new Promise((resolve, reject) => {
      fs.createReadStream(csvPath)
        .pipe(csv())
        .on('headers', columns => {
          resolve(columns)
        })
    })
  }

  /**
   * Export CSV Headers to File
   */
  const saveHeaders = () => {
    return new Promise((resolve, reject) => {
      fs.createReadStream(csvPath)
        .pipe(csv())
        .on('headers', headers => {
          fs.writeFile(headersPath, headers.join('\n'), err => {
            if (err) {
              console.log(err)
              reject(err)
            }

            console.log(`Headers Saved: ${headersPath}`)
            resolve()
          })
        })
    })
  }

  /**
   * Return Module Functions
   */
  return {
    getColumns,
    getModel,
    saveHeaders
  }
}
