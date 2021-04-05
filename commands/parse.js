const parser = require('../lib/parser')()
const mapping = require('../lib/mapping')()

module.exports = async options => {
  if (options.headersOnly) {
    await parser.saveHeaders()
  }

  if (options.model) {
    const modelMap = await mapping.getModelMapping(options.model)
    await parser.getModel(options.model, modelMap, options.limit)
  }
}
