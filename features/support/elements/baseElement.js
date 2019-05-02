const webdriver = require('selenium-webdriver');
const World = require('../world/index');
const log = require('../logger');

const timeout = 10000;

/**
 * Get string info about element locator
 * @param {object} selector element selector
 * @returns {string} locator info
 */
function getElementInfo(selector) {
  return `Locator with type ${Object.keys(selector)} is ${Object.values(selector)}`;
}

/**
 * Find element using selenium
 * @param {object} selector element selector
 * @returns {*|*|*|"ok"|"not-equal"|"timed-out"} element if element is found
 * our throws timeout error otherwise
 */
function findElement(selector) {
  return World.driver.wait(webdriver.until.elementLocated(selector), timeout,
    `Can't find '${Object.values(selector)}' element. ${getElementInfo(selector)}`);
}

/**
 * Clicking on element
 * @param {Object} selector element selector
 * @returns {Promise<void>} result of clicking
 */
async function click(selector) {
  log(`Clicking '${Object.values(selector)}'`);
  const element = await findElement(selector);
  await element.click();
}

module.exports = {
  findElement,
  click,
};
