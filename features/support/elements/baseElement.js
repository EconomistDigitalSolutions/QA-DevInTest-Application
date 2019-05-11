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
  return `Locator with type '${Object.keys(selector)}' and path '${Object.values(selector)}'`;
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

/**
 * Set text into textbox
 * @param {Object} selector element selector
 * @param {string} text text to setting
 * @returns {Promise<void>} result of setting
 */
async function setText(selector, text) {
  log(`Setting '${text}' text into '${Object.keys(selector)}'`);
  const element = await findElement(selector);
  await element.clear();
  await element.sendKeys(text);
}

/**
 * Get attribute of element
 * @param {Object} selector element selector
 * @param {Object} attribute of element
 * @returns {*|!Promise<string>|string} attribute value
 */
async function getAttribute(selector, attribute) {
  log(`Getting '${attribute}' attribite of '${Object.values(selector)}'`);
  return findElement(selector).getAttribute(attribute);
}

/**
 * Get text of element
 * @param {Object} selector element selector
 * @param {Object} state of element
 * @returns {*|!Promise<string>|string} element text
 */
async function getText(selector) {
  log(`Getting text from '${Object.values(selector)}'`);
  return findElement(selector).getText();
}

module.exports = {
  findElement,
  click,
  setText,
  getAttribute,
  getText,
};
