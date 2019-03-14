const assert = require('assert')
const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');


Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  assert(await World.driver.findElement(By.id('primary-nav')).isDisplayed());
})

Then(/^I should see the search fields$/, async () => {
  assert(await World.driver.findElement(By.className('search')).isDisplayed());
})

Then(/^I should see the sector lists$/, async () => {
  assert(await World.driver.findElement(By.className('browse')).isDisplayed());
})
