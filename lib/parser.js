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
    // Empty Line for Clean Output
    console.log()

    // Create Progress Indicator
    const text = chalk.bold(`Parsing ${model}: ${chalk.reset('0 / 0')}`).concat(chalk.dim(' [Ctrl-C to Cancel]'))
    const spinner = ora(text)

    // Start Indicator
    spinner.start()

    // Track Moving Average to get Estimate for Completion
    let totalTime = 0

    // Get the Total Number of Rows ( minus header )
    const totalLines = parseInt(execSync(`wc -l < ${csvPath}`).toString().trim()) - 1

    const headers = Object.keys(mapping)
    let count = 0

    // Generate File Name
    const fileName = `${util.createSlug(model).replace(/-/g, '_')}.sql`
    const sqlPath = path.resolve(path.join(__dirname, '../sql', fileName))

    const mapAgency = filtered => {
      // Handle Start of File
      if (count === 2) {
        // Truncate File if Exists
        if (fs.existsSync(sqlPath)) {
          fs.truncateSync(sqlPath, 0)
        }

        // Write Out Initial SQL Code
        fs.appendFileSync(sqlPath, 'SET NAMES utf8mb4;\nSET FOREIGN_KEY_CHECKS = 0;\n\nBEGIN;\n\n')
      }

      // Create Object for Mapped Data
      let mappedData = {}

      // Loop through Headers and Process Each Cell
      headers.forEach(key => {
        mappedData[mapping[key].model_field] = util.convertType(key, filtered[key], mapping[key])
      })

      let sql = sqlHelper.Insert.into('agency').setFieldsRow(mappedData).toString() + '\n'

      fs.appendFileSync(sqlPath, sql.replace('INSERT INTO', 'REPLACE INTO'))
    }

    return new Promise(resolve => {
      fs.createReadStream(csvPath)
        .pipe(csv())
        .on('data', data => {
          count++

          // Start tracking time
          let start = new Date().getTime()

          // Skip First Row of CSV Headers
          if (count === 1) {
            return
          }

          // Remove Data Not Required for this Model
          const filtered = _.pickBy(data, function(value, key) {
            return headers.indexOf(key) !== -1
          })

          if (model === 'Agency') {
            mapAgency(filtered)
          }

          if (limit && count > limit) {
            fs.appendFileSync(sqlPath, '\nCOMMIT;\n\nSET FOREIGN_KEY_CHECKS = 1;\n')
            spinner.succeed(`Export Complete: ./sql/${fileName}\n`)
            process.exit()
          }

          // Start tracking time
          let stop = new Date().getTime()

          totalTime += stop - start

          const remaining = (limit) ? (limit - count) : (totalLines - count)
          const time = util.msToTime(remaining * (totalTime / (count - 1)))

          const progress = (limit)
            ? `${chalk.reset.cyan(count.toLocaleString())} / ${chalk.reset(limit.toLocaleString())}`
            : `${chalk.reset.cyan(count.toLocaleString())} / ${chalk.reset(totalLines.toLocaleString())}`

          spinner.text = chalk.bold(`Parsing ${model}: ${progress}`).concat(chalk.dim(` ‣ RUN: ${util.msToTime(totalTime)} ‣ ETA: ${time}  [Ctrl-C to Cancel]`))

          resolve()
        })
        .on('end', () => {
          fs.appendFileSync(sqlPath, '\nCOMMIT;\n\nSET FOREIGN_KEY_CHECKS = 1;\n')
          spinner.succeed(`Export Complete: ./sql/${fileName}\n`)
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
