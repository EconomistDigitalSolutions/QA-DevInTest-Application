const { Given, When, Then } = require('cucumber');
const { assert } = require('chai');
const World = require('../support/world');
const selectors = require('../selectors');
const socialMediaUrls = require('../../constants/urls');
const { click, setText, findElement } = require('../support/baseElement');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the '(.*)'$/, async element => findElement(selectors[element]));

When(/^I click '(.*)'$/, async (element) => {
  await click(selectors[element]);
});

/**
 * Checks page url
 * @param {string} url expected url
 * This step executes the following actions:
 * 1. gets the number of open tabs
 * 2. switches to the last tab
 * 3. gets url
 * 4. checks that url is as expected
 */
When(/^I should see the page with url '(.*)'$/, async (url) => {
  const windows = await World.driver.getAllWindowHandles();
  await World.driver.switchTo().window(windows.pop());
  const currentUrl = await World.driver.getCurrentUrl();
  assert.isTrue(currentUrl.startsWith(socialMediaUrls[url]), 'Url of the page is not correct');
});

When(/^I set text '(.*)' into '(.*)'$/, async (text, element) => {
  await setText(selectors[element], text);
});

/**
 * Selects option by text from dropdown
 * @param {string} value text of the option to be selected
 * @param {string} element dropdown selector name
 * This step executes the following actions:
 * 1. clicks dropdown itself
 * 2. clicks required option
 */
When(/^I select '(.*)' from '(.*)'$/, async (value, element) => {
  await click(selectors[element]);
  const option = { xpath: `//option[normalize-space(text())='${value}']` };
  await click(option);
});
