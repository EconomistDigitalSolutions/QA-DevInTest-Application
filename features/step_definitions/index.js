const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const { expect } = require('chai');
const World = require('../support/world');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/,
  async () => World.driver.findElement(By.id('primary-nav')));

Then(/^I should see the search form$/, async () => {
  const displayed = await World.jobsPage.searchForm.isDisplayed();
  expect(displayed).to.eql(true, 'Search field not displayed');
});

// These field steps should probably take a field name and dispatch dynamically
Then(/^I should see the search field for keyword$/, async () => {
  const fieldVisible = await World.jobsPage.keywordField.isDisplayed();
  expect(fieldVisible).to.eql(true, 'Search field for keyword not displayed');
});

Then(/^I should see the search field for location$/, async () => {
  const fieldVisible = await World.jobsPage.locationField.isDisplayed();
  expect(fieldVisible).to.eql(true, 'Search field for locationkeyword not displayed');
});

Then(/^I should see the search field for distance$/, async () => {
  const fieldVisible = await World.jobsPage.distanceField.isDisplayed();
  expect(fieldVisible).to.eql(true, 'Search field for distance not displayed');
});
