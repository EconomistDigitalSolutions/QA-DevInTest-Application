const { assert } = require('chai');
const { Then, When } = require('cucumber');
const World = require('../support/world');
const selectors = require('../constants/selectors');

/**
 * Opens a random option from sector
 * This step performes the following actions:
 * 1. finds all elements in sector
 * 2. gets a random number, not more than amount of found elements
 * 3. saves sector title for generated index to World
 * 4. clicks sector with generated index
 */
When(/^I click an option from sector list$/, async () => {
  const elements = await World.driver.findElements(selectors['sector items'].locator);
  const index = Math.floor(Math.random() * elements.length);
  World.sectorTitle = await elements[index].getText();
  await elements[index].click();
});
  
/**
 * Checks that page for relevand sector is opened
 * This step performes the following actions:
 * 1. gets an element with page title
 * 2. gets page title form the element
 * 3. checks page title equals to the sector title from World
 */
Then(/^Page with relevant sector is opened$/, async () => {
  const element = await World.driver.findElement(selectors['browsing'].locator);
  const pageTitle = await element.getText();
  assert.equal(pageTitle,`${World.sectorTitle} jobs`, 'Appropriate sector should be opened');
});
