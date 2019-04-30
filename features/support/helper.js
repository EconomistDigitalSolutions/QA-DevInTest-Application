const World = require('../support/world');

async function getRandomElement(selector) {
  const allElements = await World.driver.findElements(selector);
  const text = allElements[Math.floor(Math.random() * allElements.length)];
  return text;
}

module.exports = { getRandomElement };
