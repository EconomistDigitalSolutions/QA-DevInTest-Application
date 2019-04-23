const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');
const selectors = require('../selectors');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the '(.*)'$/, async (element) => {
  return World.driver.findElement(selectors[element]);
})