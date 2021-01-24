const del = require('del')
const path = require('path')
const extract = require('progress-extract')

const download = require('../lib/download')

const urlCodebook = 'https://peter.build/fe/pdp/codebook.pdf'
const urlCsv = 'https://peter.build/fe/pdp/police_data_portal.csv.zip'
const srcPath = path.resolve(path.join(__dirname, '../src'))
const zipPath = path.resolve(`${srcPath}/police_data_portal.csv.zip`)

module.exports = async options => {
  const getCodebook = (!options.codebook && !options.csv) || options.codebook
  const getCsv = (!options.codebook && !options.csv) || options.csv

  if (getCodebook) {
    await download(urlCodebook, srcPath, 'Codebook')
  }

  if (getCsv) {
    await download(urlCsv, srcPath, 'CSV')
    await extract(zipPath, srcPath)
    await del(zipPath, {
      force: true
    })
  }
}
