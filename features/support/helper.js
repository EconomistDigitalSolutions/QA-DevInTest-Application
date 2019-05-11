/* eslint-disable no-await-in-loop */
const World = require('../support/world');

/**
 * Gets random element from the list
 * @param {object} element element selector
 * @returns {Promise<void>} for random element
 */
async function getRandomItem(element) {
  const elements = await World.driver.findElements(element);
  return elements[Math.floor(Math.random() * elements.length)];
}

module.exports = {
  getRandomItem,
};
