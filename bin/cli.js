#!/usr/bin/env node

const debug = require('debug')('cli')
const path = require('path')
const yargs = require('yargs')
const chalk = require('chalk')

const argv = yargs
  .usage('Usage: pdp <command> --switches')
  .command('fetch', 'Fetch Latest Data', {
    codebook: {
      describe: 'Fetch Codebook Only',
      type: 'boolean',
      default: false
    },
    csv: {
      describe: 'Fetch CSV Only',
      type: 'boolean',
      default: false
    }
  })
  .command('parse', 'Parse CSV File', {
    headersOnly: {
      describe: 'Extract Headers to File',
      type: 'boolean',
      default: false
    },
    limit: {
      alias: 'l',
      describe: 'Limit Number of Records to Parse',
      type: 'number',
      default: 0
    },
    model: {
      alias: 'm',
      describe: 'Use Mapping for Provided Model',
      type: 'string',
      choices: ['Agency', 'AnnualDeaths', 'AnnualOfficerDeaths', 'Characteristics', 'Crimes', 'Demographics', 'FirearmLaws', 'Gunshots']
    }
  })
  .command('util', 'Developer Utilities', {
    model: {
      alias: 'm',
      describe: 'Get Mapping for Provided Model',
      type: 'string',
      choices: ['Agency', 'AnnualDeaths', 'AnnualOfficerDeaths', 'Characteristics', 'Crimes', 'Demographics', 'FirearmLaws', 'Gunshots']
    },
    format: {
      alias: 'f',
      describe: 'Format to Render to Console',
      type: 'string',
      choices: ['json', 'table']
    },
    sql: {
      alias: 's',
      describe: 'Generate SQL Import',
      type: 'boolean',
    }
  })
  .example('pdp fetch', 'Fetch Latest Codebook & CSV')
  .example('pdp fetch --codebook', 'Fetch Latest Codebook')
  .example('pdp fetch --csv', 'Fetch Latest CSV')
  .example('pdp parse --headers-only', 'Extract Headers to File')
  .example('pdp parse --model Agency', 'Parse CSV for Specific Model')
  .example('pdp util --model Agency --format table', 'Get CSV Mapping for Model')
  .example('pdp util --sql > schema.sql', 'Convert CSV to Raw SQL Schema')
  .demand(1)
  .help()
  .version().argv

const command = argv._[0]

try {
  debug(`Executing ${command}`)
  require(path.join(__dirname, `../commands/${command}.js`))(argv)
} catch (err) {
  if (err.code === 'MODULE_NOT_FOUND') {
    console.log(chalk.red.bold(`\n✖ Command 'pdp ${command}' not recognized\n`))
    console.log('Use ' + chalk.cyan('pdp help') + ' for a list of commands\n')
  } else {
    throw err
  }
}
