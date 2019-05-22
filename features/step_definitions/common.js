const { When, Given } = require('cucumber');
const selectors = require('../selectors');
const World = require('../support/world');
const { assert } = require('chai');
const {click,
  waitIsPresent,
  getText,
  setText,
  selectByText,
  getAttribute,
} = require('../support/elements');

/**
 * Opens Home page
 */
Given(/^I go to the home page$/, () => World.goToJobsPage());

/**
 * Clicks the specified item link on a page
 * @param {string} element expected item name
 * This step executes the following actions:
 * 1. clicks link with specified item name
 */
When(/^I click '(.*)'$/, async (element) => {
  await click(selectors[element]);
});

/**
 * Switches to the last window in a browser
 */
When(/^I switch to the last window$/, async () => {
  await World.switchToLastWindow ();
});

/**
 * Checks the specified item on a page
 * @param {string} element expected item name
 * This step executes the following actions:
 * 1. checks item with specified item name
 */
When(/^'(.*)' is displayed$/, async (element) => {
  await waitIsPresent(selectors[element]);
});

/**
 * Populates the specified item with the specified value
 * @param {string} value specified value
 * @param {string} element specified item name
 * This step executes the following actions:
 * 1. populates item with specified value
 */
When(/^I type '(.*)' into '(.*)'$/, async (value,element) => {
  await setText(value,selectors[element]);
});

/**
 * Checks whether an element contains the specified text
 * @param {string} element specified element
 * @param {string} text expected text
 * This step executes the following actions:
 * 1. gets text from the specified element
 * 2. checks if the text received from element contains the specified text
 */
When(/^'(.*)' contains '(.*)'$/, async (element, text) => {
  const title = await getText(selectors[element]);
  assert.include(title.toLowerCase(),text.toLowerCase(),'Search results do not meet search criteria');
});

/**
 * Selects the specified value in a drop-down
 * @param {string} value specified value
 * @param {string} element specified element
 * This step executes the following actions:
 * 1. selects the specified value in the specified element
 */
When(/^I select '(.*)' in '(.*)'$/, async (value, element) => {
  await selectByText(selectors[element],value);
});

/**
 * Checks the location field
 * @param {string} location expected value
 * @param {string} element specified element
 * This step executes the following actions:
 * 1. gets actual location
 * 2. checks that actual location is as expected
 */
When(/^'(.*)' is present in '(.*)'$/, async (location, element) => {
  const actualLocation = await getAttribute(selectors[element],'value');
  assert.include(location.toLowerCase(),actualLocation.toLowerCase(),'The value in the Location field differs from the search criteria');
});

