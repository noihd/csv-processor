const mapping = require('./mapping')()

module.exports = () => {
  /**
   * Custom Function to process Mapped Object for CSV Value
   * @param {String} key CSV Column
   * @param {String} value CSV Value
   * @param {Object} map Mapping for provided `key`
   * @returns Mixed
   */
  const convertType = (key, value, map) => {
    // TODO: Process Data Limits, e.g. map.max_length
    if (map.model_type === 'boolean') {
      return parseCsvBoolean(value)
    } else if (map.model_type === 'decimal') {
      return parseCsvFloat(value, map.max_length)
    } else if (map.model_type === 'double') {
      return parseCsvFloat(value, map.max_length)
    } else if (map.model_type === 'enum') {
      return mapping.getEnumValue(key, value)
    } else if (map.model_type === 'float') {
      return parseCsvFloat(value, map.max_length)
    } else if (map.model_type === 'integer') {
      return parseCsvInt(value, map.max_length)
    } else if (map.model_type === 'string') {
      // Some CSV Columns need to be updated to Title Case because they are in ALL CAPS
      const useTitleCase = ['XWK_11', 'XWK_15', 'XWK_17', 'XWK_18', 'XWK_19', 'XWK_25', 'XWK_26', 'XWK_27', 'XWK_29', 'XWK_46']

      if (useTitleCase.indexOf(key) > -1) {
        return titleCase(parseCsvString(value))
      } else {
        return parseCsvString(value)
      }
    } else if (map.model_type === 'text') {
      return parseCsvString(value)
    } else {
      return value
    }
  }

  /**
   * Create URL Friendly Slug from String
   * @param {String} string
   * @returns String
   */
  const createSlug = string => {
    const chars = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const replace = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const pattern = new RegExp(chars.split('').join('|'), 'g')

    return string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(pattern, match => replace.charAt(chars.indexOf(match)))
      .replace(/&/g, '-and-')
      .replace(/[^\w\-]+/g, '') // eslint-disable-line no-useless-escape
      .replace(/\-\-+/g, '-') // eslint-disable-line no-useless-escape
      .replace(/^-+/, '')
      .replace(/-+$/, '')
  }

  /**
   * Get Table Name from Model
   * @param {String} model
   */
  const getTableName = model => {
    const models = {
      'Agency': 'agency',
      'AnnualDeaths': 'annual_deaths',
      'AnnualOfficerDeaths': 'annual_officer_deaths',
      'Characteristics': 'characteristics',
      'Crimes': 'crimes',
      'Demographics': 'demographics',
      'FirearmLaws': 'firearm_law',
      'Gunshots': 'gunshots'
    }

    return models[model]
  }

  /**
   * Convert Milliseconds into ISO HH:MM:SS format
   * @param {Integer} ms
   * @returns String
   */
  const msToTime = ms => {
    return new Date(ms).toISOString().slice(11,19)
  }

  /**
   * Custom Function to Parse Boolean from CSV Value
   * @param {*} val
   */
  const parseCsvBoolean = val => {
    if (typeof val === 'number') {
      if (val === 0) {
        return false
      } else if (val === 1) {
        return true
      }
    } else if (typeof val === 'string' && val !== '') {
      if (val.trim() === '0' || val.trim().toUpperCase() === 'N' || val.trim().toUpperCase() === 'NO') {
        return false
      } else if (val.trim() === '1' || val.trim().toUpperCase() === 'Y' || val.trim().toUpperCase() === 'YES') {
        return true
      }
    }

    return null
  }

  /**
   * Custom Function to Parse Email from CSV Value
   * @param {String} val Value from CSV Column
   */
  const parseCsvEmail = val => {
    if (typeof val === 'string' && val !== '') {
      // eslint-disable-next-line no-useless-escape
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(val) ? val.toLowerCase() : null
    }

    return null
  }

  /**
   * Custom Function to Parse Float from CSV Value
   * @param {String} val Value from CSV Column
   * @param {Number} maxLength
   * @param {Boolean} useZero
   */
  const parseCsvFloat = (val, maxLength, useZero) => {
    if (typeof val === 'number') {
      return parseFloat(val)
    } else if (typeof val === 'string' && val !== '' && /[0-9.-]/.test(val)) {
      return parseFloat(val.replace(/[^0-9.-]/g, ''))
    }

    return useZero ? 0 : null
  }

  /**
   * Custom Function to Parse Int from CSV Value
   * @param {String} val Value from CSV Column
   * @param {Number} maxLength
   * @param {Boolean} useZero
   */
  const parseCsvInt = (val, maxLength, useZero) => {
    if (typeof val === 'number') {
      return parseInt(val)
    } else if (typeof val === 'string' && val !== '' && /[0-9.-]/.test(val)) {
      return parseInt(val.replace(/[^0-9.-]/g, ''))
    }

    return useZero ? 0 : null
  }

  /**
   * Custom Function to Parse Phone from CSV Value
   * @param {String} val Value from CSV Column
   */
  const parseCsvPhone = val => {
    if (typeof val === 'string' && val !== '') {
      const pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
      return pattern.test(val) ? val : null
    }

    return null
  }

  /**
   * Custom Function to Parse String from CSV Value
   * @param {String} val Value from CSV Column
   */
  const parseCsvString = val => {
    if (typeof val === 'number') {
      return val.toString()
    } else if (typeof val === 'string' && val !== '') {
      return val.trim() !== '' ? val.trim() : null
    }

    return null
  }

  /**
   * Custom Function to Parse URL from CSV Value
   * @param {String} val Value from CSV Column
   */
  const parseCsvURL = val => {
    if (typeof val === 'string' && val !== '') {
      try {
        // eslint-disable-next-line no-new
        new URL(val)
        return val
      } catch (_) {
        return null
      }
    }

    return null
  }

  /**
   * Prep SQL Statement
   * @param {Object} sql
   * @returns String
   */
  const prepSQL = sql => {
    return sql.toString().replace('INSERT INTO', 'REPLACE INTO') + '\n'
  }

  /**
   * Concert Text to Title Case
   * @param {String} val
   * @returns String
   */
  const titleCase = val => {
    // If no value is present, or string is empty, return `null`
    if (!val || val === '') {
      return null
    }

    // Covert all text to lowercase first
    val = val.toLowerCase()

    // Handle Special Cases
    const SMALL_WORDS = /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i
    const TOKENS = /[^\s:–—-]+|./g
    const WHITESPACE = /\s/
    const IS_MANUAL_CASE = /.(?=[A-Z]|\..)/
    const ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/
    const STATE_ABBREVIATIONS = ['al', 'ak', 'as', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'dc', 'fm', 'fl', 'ga', 'gu', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'mh', 'md', 'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj', 'nm', 'ny', 'nc', 'nd', 'mp', 'oh', 'ok', 'or', 'pw', 'pa', 'pr', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'vt', 'vi', 'va', 'wa', 'wv', 'wi', 'wy']

    // Store Results from Formatting
    let result = ''
    let m

    // Process Formatting
    while ((m = TOKENS.exec(val)) !== null) {
      let {0: token, index} = m

      // If this is a State Abbreviation, Uppercase it
      if (STATE_ABBREVIATIONS.indexOf(token) !== -1) {
        token = token.toUpperCase()
      }

      // Uppercase First Letter only if needed
      if (!IS_MANUAL_CASE.test(token) && (!SMALL_WORDS.test(token) || index === 0 || index + token.length === val.length) && (val.charAt(index + token.length) !== ':' || WHITESPACE.test(val.charAt(index + token.length + 1)))) {
        result += token.replace(ALPHANUMERIC_PATTERN, m => m.toUpperCase())
        continue
      }

      // Add Formatted Word back to Results
      result += token
    }

    // Return Title Cased String
    return result
  }

  /**
   * Return Module Functions
   */
  return {
    convertType,
    createSlug,
    getTableName,
    msToTime,
    parseCsvBoolean,
    parseCsvEmail,
    parseCsvFloat,
    parseInt,
    parseCsvPhone,
    parseCsvString,
    parseCsvURL,
    prepSQL,
    titleCase
  }
}
