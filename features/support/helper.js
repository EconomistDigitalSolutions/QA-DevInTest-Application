const World = require('../support/world');
const selectors = require('../selectors');

/**
 * Find element using selenium
 * @param {object} selector element selector
 * @returns {*|*|*|"ok"|"not-equal"|"timed-out"} element if element is found
 * our throws timeout error otherwise
 */
function randomItem(element) {
  const elements = World.driver.findElements(selectors[element]);
  return elements[Math.floor(Math.random() * elements.length)];
}

module.exports = {
  randomItem,
};
