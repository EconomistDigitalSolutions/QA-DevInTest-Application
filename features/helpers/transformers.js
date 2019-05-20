const { By } = require('selenium-webdriver');
const { sprintf } = require('sprintf-js');

/**
 * Add to each selector its name and locator
 * @param {Object} selectors object with selectors in properties
 * @returns {*} modified selectors
 */
function transformSelectors(selectors) {
  Object.keys(selectors).forEach((key) => {
    const selector = selectors[key];
    selector.name = key;
    selector.locator = By[selector.type](selector.selector);
  });
  return selectors;
}

/**
 * Insert values into locator template
 * @param {object} selector element selector
 * @param {*} params values for insert
 * @returns {object} updated selector
 */
function fromPattern(selector, ...params) {
  const selectorHere = JSON.parse(JSON.stringify(selector));
  selectorHere.selector = sprintf(selectorHere.selector, ...params);
  selectorHere.locator.value = sprintf(selectorHere.locator.value, ...params);
  return selectorHere;
}

module.exports = {
  transformSelectors,
  fromPattern,
};
