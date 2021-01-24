const parser = require('../lib/parser')()

module.exports = async options => {
  if (options.headersOnly) {
    await parser.saveHeaders()
  }
}
