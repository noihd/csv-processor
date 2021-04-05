const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')
const _ = require('lodash')

const util = require('./util')()

const csvPath = path.resolve(path.join(__dirname, '../src', 'police_data_portal.csv'))
const headersPath = path.resolve(path.join(__dirname, '../src', 'police_data_portal_headers.txt'))

module.exports = () => {
  const getModel = (model, mapping, limit) => {
    const headers = Object.keys(mapping)
    let count = 0

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

          // Create Object for Mapped Data
          let mappedData = {}

          // Loop through Headers and Process Each Cell
          headers.forEach(key => {
            mappedData[mapping[key].model_field] = util.convertType(key, filtered[key], mapping[key])
          })

          console.log('mappedData', mappedData)

          if (limit && count > limit) {
            process.exit()
          }

          resolve()
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
    getModel,
    saveHeaders
  }
}
