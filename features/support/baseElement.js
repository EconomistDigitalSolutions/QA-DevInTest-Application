const { until } = require('selenium-webdriver');
const World = require('../support/world');

const ELEMENT_TIMEOUT = 10000;

async function findElement(element) {
  return World.driver.wait(until.elementLocated(element, ELEMENT_TIMEOUT), ELEMENT_TIMEOUT,
    `Element ${Object.values(element)} is not found`);
}

async function click(selector) {
  const element = await findElement(selector);
  await element.click();
}

async function setText(selector, text) {
  const element = await findElement(selector);
  await element.sendKeys(text);
}

module.exports = {
  click,
  setText,
  findElement,
};
