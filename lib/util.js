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
      return parseCsvFloat(value)
    } else if (map.model_type === 'double') {
      return parseCsvFloat(value)
    } else if (map.model_type === 'enum') {
      return mapping.getEnumValue(key, value)
    } else if (map.model_type === 'float') {
      return parseCsvFloat(value)
    } else if (map.model_type === 'integer') {
      return parseCsvInt(value)
    } else if (map.model_type === 'string') {
      // Some CSV Columns need to be Title Cases because they are in ALL CAPS
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
   * @param {*} string
   * @returns
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
   * @param {*} val
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
   * @param {*} val
   * @param {*} useZero
   */
  const parseCsvFloat = (val, useZero) => {
    if (typeof val === 'number') {
      return parseFloat(val)
    } else if (typeof val === 'string' && val !== '' && /[0-9.-]/.test(val)) {
      return parseFloat(val.replace(/[^0-9.-]/g, ''))
    }

    return useZero ? 0 : null
  }

  /**
   * Custom Function to Parse Int from CSV Value
   * @param {*} val
   * @param {*} useZero
   */
  const parseCsvInt = (val, useZero) => {
    if (typeof val === 'number') {
      return parseInt(val)
    } else if (typeof val === 'string' && val !== '' && /[0-9.-]/.test(val)) {
      return parseInt(val.replace(/[^0-9.-]/g, ''))
    }

    return useZero ? 0 : null
  }

  /**
   * Custom Function to Parse Phone from CSV Value
   * @param {*} val
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
   * @param {*} val
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
   * @param {*} val
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
   * Concert Text to Title Case
   * @param {String} val
   * @returns String
   */
  const titleCase = val => {
    if (!val || val === '') {
      return val
    }

    val = val.toLowerCase()

    const SMALL_WORDS = /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i
    const TOKENS = /[^\s:–—-]+|./g
    const WHITESPACE = /\s/
    const IS_MANUAL_CASE = /.(?=[A-Z]|\..)/
    const ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/
    const STATE_ABBREVIATIONS = ['al', 'ak', 'as', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'dc', 'fm', 'fl', 'ga', 'gu', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'mh', 'md', 'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj', 'nm', 'ny', 'nc', 'nd', 'mp', 'oh', 'ok', 'or', 'pw', 'pa', 'pr', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'vt', 'vi', 'va', 'wa', 'wv', 'wi', 'wy']

    let result = ''
    let m

    while ((m = TOKENS.exec(val)) !== null) {
      let {0: token, index} = m

      if (STATE_ABBREVIATIONS.indexOf(token) !== -1) {
        token = token.toUpperCase()
      }

      if (!IS_MANUAL_CASE.test(token) && (!SMALL_WORDS.test(token) || index === 0 || index + token.length === val.length) && (val.charAt(index + token.length) !== ':' || WHITESPACE.test(val.charAt(index + token.length + 1)))) {
        result += token.replace(ALPHANUMERIC_PATTERN, m => m.toUpperCase())
        continue
      }

      result += token
    }

    return result
  }

  /**
   * Return Module Functions
   */
  return {
    convertType,
    createSlug,
    parseCsvBoolean,
    parseCsvEmail,
    parseCsvFloat,
    parseInt,
    parseCsvPhone,
    parseCsvString,
    parseCsvURL,
    titleCase
  }
}
