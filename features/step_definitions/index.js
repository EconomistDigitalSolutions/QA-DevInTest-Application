const assert = require('assert')
const mappings = require('./mappings');
const { Given, Then, When } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');


Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then('I should see the {string}', async function (element) {
  assert(await World.driver.findElement(By.css(mappings.jobsPageVisibleElementsMap.get(element))).isDisplayed())
});

When('I click on {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see the {string} page', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
