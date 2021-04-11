const mapping = require('../lib/mapping')()
const parser = require('../lib/parser')()

module.exports = async options => {
  if (options.model) {
    // Generate Model Mapping
    const modelMapping = await mapping.getModelMapping(options.model, options.format)
    console.log(modelMapping)
  } else if (options.sql) {
    // Generate SQL Output
    const columns = await parser.getColumns()
    const sql = await mapping.generateSQL(columns)
    console.log(sql)
  }
}
