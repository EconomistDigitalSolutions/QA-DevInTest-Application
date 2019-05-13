const { Given, When, Then } = require('cucumber');
const { assert } = require('chai');
const World = require('../support/world');
const {
  findElement, click,
} = require('../support/elements');
const { getRandomItem } = require('../support/helper');
const log = require('../support/logger');
const selectors = require('../selectors');

/**
 * Goes to the jobs main page
 * This step executes the following actions:
 * 1. Goes to the jobs main page
 */
Given(/^I go to the jobs page$/, () => World.goToJobsPage());

/**
 * Checks that element exists on the page
 * @param {string} element element to be checked
 * This step executes the following actions:
 * 1. searches for an element
 */
Then(/^I should see the '(.*)'\s?(?:block|searchbox|textbox|dropdown|button|link|text)?$/, async element => findElement(selectors[element]));

/**
 * Clicks on the element
 * @param {string} element element to be clicked
 * This step executes the following actions:
 * 1. clicks on the element
 */
When(/^I click the '(.*)'\s?(?:button|link)?$/, async element => click(selectors[element]));

/**
 * Clicks on the random element
 * @param {string} element element to be clicked
 * This step executes the following actions:
 * 1. gets a random item
 * 2. logs which item will be clicked on
 * 3. clicks on that random item
 */
When(/^I click random '(.*)'$/, async (element) => {
  const randomItem = await getRandomItem(selectors[element]);
  log(`Clicking the '${await randomItem.getText()}' item`);
  await randomItem.click();
});

/**
 * Checks that link is functional and leads to the correct page
 * @param {string} link a link to be checked
 * @param {string} page a page that should be opened after clicking a link
 * This step executes the following actions:
 * 1. retrieves the current list of available windows
 * 2. switches to the last window in the list
 * 3. gets url of that window
 * 4. compares expected and actual url and throws an error in case of failure
 */
Then(/^the '(.*)' link should lead to the '(.*)'$/, async (link, page) => {
  const tabs = await World.driver.getAllWindowHandles();
  await World.driver.switchTo().window(tabs.pop());
  const url = await World.driver.getCurrentUrl();
  assert.equal(url, page, `The '${link}' link redirects to the incorrect page`);
});
