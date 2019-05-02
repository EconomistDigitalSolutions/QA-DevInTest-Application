
/**
 * Logs a message
 * @param {string} message The message to log
 * @param {string} logLevel The level of the log
 */
module.exports = function log(message, logLevel = 'INFO') {
  // eslint-disable-next-line no-console
  console.log(`[${logLevel}] : ${new Date()} : ${message}`);
};
