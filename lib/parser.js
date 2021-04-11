const fs = require('fs')
const _ = require('lodash')
const csv = require('csv-parser')
const path = require('path')
const sqlHelper = require('mysql-generator')

const util = require('./util')()

const csvPath = path.resolve(path.join(__dirname, '../src', 'police_data_portal.csv'))
const headersPath = path.resolve(path.join(__dirname, '../src', 'police_data_portal_headers.txt'))

module.exports = () => {
  const getModel = (model, mapping, limit) => {
    const headers = Object.keys(mapping)
    let count = 0

    const mapAgency = filtered => {
      // Create Object for Mapped Data
      let mappedData = {}

      // Loop through Headers and Process Each Cell
      headers.forEach(key => {
        mappedData[mapping[key].model_field] = util.convertType(key, filtered[key], mapping[key])
      })

      var sql = sqlHelper.Insert.into('agency').setFieldsRow(mappedData).toString()

      return sql.replace('INSERT INTO', 'REPLACE INTO')
    }

    return new Promise(resolve => {
      fs.createReadStream(csvPath)
        .pipe(csv())
        .on('data', data => {
          count++

          // Skip First Row of CSV Headers
          if (count === 1) {
            return
          }

          // Remove Data Not Required for this Model
          const filtered = _.pickBy(data, function(value, key) {
            return headers.indexOf(key) !== -1
          })

          if (model === 'Agency') {
            console.log(mapAgency(filtered))
          }

          if (limit && count > limit) {
            process.exit()
          }

          resolve()
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
