const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

const csvPath = path.resolve(path.join(__dirname, '../src', 'police_data_portal.csv'))
const headersPath = path.resolve(path.join(__dirname, '../src', 'police_data_portal_headers.txt'))

module.exports = () => {
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

  return {
    saveHeaders
  }
}
