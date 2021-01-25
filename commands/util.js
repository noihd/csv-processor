const mapping = require('../lib/mapping')()

module.exports = async options => {
  if (options.model) {
    const modelMapping = await mapping.getModelMapping(options.model, options.format)
    console.log(modelMapping)
  }
}
