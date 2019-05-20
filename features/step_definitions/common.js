const { assert } = require('chai');
const { Given, When, Then } = require('cucumber');
const World = require('../support/world');
const selectors = require('../constants/selectors');
const urls = require('../constants/urls');

/**
 * Navigates to the jobs page.
 */
Given(/^I go to the jobs page$/, () => World.goToJobsPage());

/**
 * Checks if an element is shown
 * @param {string} item element's name to check
 * @returns {WebElement} found element
 */
Then(/^I should see the '(.*)'$/, async (item) => {
  return World.driver.findElement(selectors[item].locator);
});

/**
 * Clicks an element
 * @param {string} item elements to click
 * This step performes the following actions:
 * 1. finds an element
 * 2. clicks the element
 */
When(/^I click '(.*)'$/, async (item) => {
  const element = await World.driver.findElement(selectors[item].locator);
  await element.click();
});

/**
 * Checks if a page is opened
 * @param {string} item page's name to check
 * @returns {WebElement} found element
 */
Then(/^'(.*)' page is opened$/, async (item) => {
  return World.driver.findElement(selectors[`${item} page`].locator);
});

/**
 * Checks href attribute of an element
 * @param {string} item element's name to check
 * This step performes the following actions:
 * 1. finds an element
 * 2. checks that actual url is same as the expected one
 */
Then(/^'(.*)' has valid link$/, async (item) => {
  const link = World.driver.findElement(selectors[item].locator);
  assert.equal(await link.getAttribute('href'), urls[item], `${item} link should be valid`);
});
