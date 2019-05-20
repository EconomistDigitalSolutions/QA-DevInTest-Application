const { assert } = require('chai');
const { Then, When } = require('cucumber');
const World = require('../support/world');
const selectors = require('../constants/selectors');
const { fromPattern } = require('../helpers/transformers');

/**
 * Opens a random job from job list
 * This step performes the following actions:
 * 1. finds all elements in job list
 * 2. gets a random number, not more than amount of found elements
 * 3. clicks job with generated index
 */
When(/^I click a job from list$/, async () => {
  const elements = await World.driver.findElements(selectors['job header link'].locator);
  const index = Math.floor(Math.random() * elements.length);
  await elements[index].click();
});
  
/**
 * Sets job list's filter
 * @param {string} filter name of the filter
 * This step performes the following actions:
 * 1. resets World's index if defined
 * 2. finds the filter element
 * 3. expands the filter
 * 4. with maximum 5 retries does the following:
 * 4.1. sets filter and saves it's value to World
 * 4.2. gets jobs
 * 4.3. checks there is at list one job present
 */
When(/^I select filter for '(.*)'$/, async (filter) => {
  World.index = undefined;
  const filterCategorySelector = fromPattern(selectors['filter category'], filter);
  const element = await World.driver.findElement(filterCategorySelector.locator);
  await element.click();
  for (let i = 0; i < 5; i++) {
    World.filterValue = await setFilter(filter);
    const jobs = await World.driver.findElements(selectors['job header link'].locator);
    if (jobs.length > 0) {
      break;
    }
  }
});
  
/** Checks relevant search result is present for selected filter
 * @param {string} filter name of the filter / category
 * This step performes the following actions:
 * 1. finds values for relevant category
 * 2. checks it includes the value from World
 */
Then(/^I should see relevant search result for '(.*)'$/, async (filter) => {
  const filterValueSelector = fromPattern(selectors['filter value'], filter.replace(' ', ''));
  const element = await World.driver.findElement(filterValueSelector.locator);
  assert.include(await element.getText(), World.filterValue, `Search result should contain ${World.filterValue}`);
});
  
/**
 * Sets filter
 * @param {string} filter name of the filter
 * @returns {string} filter's option
 * This step performes the following actions:
 * 1. finds the filter's option elements
 * 2. un-ticks previously applied filter if it was ticked
 * 3. gets a random number, not more than amount of found options and saves in World
 * 4. ticks option with generated index
 * 5. finds search button
 * 6. 
 */
async function setFilter(filter) {
  const filterItemSelector = fromPattern(selectors['filter item'], filter.slice(0, filter.indexOf(' ')));
  const elements = await World.driver.findElements(filterItemSelector.locator);
  if (World.index !== undefined) {
    await elements[World.index].click();
  }
  World.index = Math.floor(Math.random() * elements.length);
  await elements[World.index].click();
  const search = await World.driver.findElement(selectors['search'].locator);
  const value = elements[World.index].getText();
  await search.click();
  return value;
}
