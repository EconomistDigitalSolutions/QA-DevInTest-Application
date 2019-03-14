const assert = require('assert')
const mappings = require('./mappings');
const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');


Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then('I should see the {string}', async function (element) {
  assert(await World.driver.findElement(By.css(mappings.jobsPageVisibleElementsMap.get(element))).isDisplayed())
});
