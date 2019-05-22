const webdriver = require('selenium-webdriver');
const World = require('../world');
const log = require('../logger');
const {transformSelectors} = require ('../helpers/transformers');
const timeout = 10000;

/**
 * Waiting till an element is present
 * @param {Object} selector of an element
 * @returns result of waiting - either a web element or an error if it is not found
 */
async function waitIsPresent(selector) {
  log(`Waiting for "${selector.name}" is present`);
  await World.waitPageLoad();
  const element = await findElement(selector);
  try {
    if (await element.isDisplayed()) {
      return element;
    }
    return false;
  } catch (e) {
    return false;
  }
}

/**
 * Finding an element using selenium
 * @param {object} selector of an element
 * @returns an web element if element is found or throws timeout error otherwise
 */
function findElement(selector) {
  return World.driver.wait(webdriver.until.elementLocated(selector.locator), timeout, `Can't find '${selector.name}' element. ${getElementInfo(selector)}`);
}
/**
 * Clicking on an element
 * @param {Object} selector of an element
 * @returns {Promise<void>} result of clicking
 */
async function click(selector) {
  log(`Clicking "${selector.name}"`);
  const element = await waitIsEnabled(selector);
  try {
    await element.click();
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Waiting till an element is enabled
 * @param {Object} selector of an element
 * @returns result of waiting - either a web element or an error if it is not found
 */
async function waitIsEnabled(selector){
  log(`Waiting for "${selector.name}" is enabled`);
  await World.waitPageLoad();
  const element = await findElement(selector);
  try {
    if (await element.isEnabled()) {
      return element;
    }
    return false;
  } catch (e) {
    return false;
  }
}

/**
 * Get string info about an element locator
 * @param {object} selector of an element
 * @returns {string} locator info
 */
function getElementInfo(selector) {
  return `Locator with type ${selector.type} is ${selector.locator.value}`;
}

/**
 * Getting text of an element
 * @param {Object} selector of an element
 * @returns {*|!Promise<string>|string} element text
 */
async function getText(selector) {
  log(`Getting text from "${selector.name}"`);
  const element = await waitIsPresent(selector);
  try {
    const text = await element.getText();
    log(`Text is "${text}"`);
    return text;
  } catch (e) {
    return false;
  }
}

/**
 * Finding elements on a page
 * @param {Object} selector of an element
 * @returns an array of web elements if elements are found or throws timeout error otherwise
 */
async function findElementsOnPage(selector){
  const elementLocator = selector.locator;
  await World.waitPageLoad();
  return await World.driver.findElements(elementLocator);
}

/**
 * Setting text into a textbox
 * @param {Object} selector of an element
 * @param {string} text text to be set
 * @returns {Promise<void>} result of setting
 */
async function setText(text,selector){
  log(`Typing "${text}"text into "${selector.name}"`);
  await World.waitPageLoad();
  const element = await findElement(selector);
  await element.clear();
  await element.sendKeys(text);
}

/**
 * Selecting By Text
 * @param {Object} selector of an element
 * @param {string} text ttext to be set
 * @returns {Promise<void>} result of setting
 */
async function selectByText(selector, text) {
  log(`Setting "${text}" text into "${selector.name}"`);
  await click(selector);
  await click(transformSelectors({
    'Value from dropdown': {
      selector: `${selector.selector}//option[contains(text(),'${text}')]`,
      type: 'xpath',
    },
  })['Value from dropdown']);
}

/**
 * Getting an attribute of an element
 * @param {Object} selector of an element
 * @param {Object} attribute of an element
 * @returns {*|!Promise<string>|string} attribute value
 */
async function getAttribute(selector, attribute) {
  log(`Getting '${attribute}' attribute of '${Object.values(selector)}'`);
  return findElement(selector).getAttribute(attribute);
}

module.exports = {
  click,
  waitIsPresent,
  getText,
  findElementsOnPage,
  setText,
  selectByText,
  getAttribute
};

