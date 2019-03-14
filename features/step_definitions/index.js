const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id('primary-nav'));
})

Then(/^I should see the search fields$/, async () => {
  return World.driver.findElement(By.className('search'));
})
