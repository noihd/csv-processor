const chalk = require('chalk')
const Downloader = require('nodejs-file-downloader')
const ora = require('ora')

module.exports = async (url, directory, label) => {
  const text = chalk.bold(`Downloading ${label}: %  0.00`).concat(chalk.dim(' [Ctrl-C to Cancel]'))
  const spinner = ora(text)

  /**
   * Create New Downloader and Watch Progress
   */
  const downloader = new Downloader({
    url: url,
    directory: directory,
    cloneFiles: false,
    onProgress: percentage => {
      spinner.text = chalk.bold(`Downloading ${label}: % ${percentage}`).concat(chalk.dim(' [Ctrl-C to Cancel]'))
    }
  })

  /**
   * Monitor Download Progress and Catch Errors
   */
  try {
    spinner.start()
    await downloader.download()
    spinner.succeed(`Download ${label} Complete`)
  } catch (err) {
    spinner.fail(err)
  }
}
