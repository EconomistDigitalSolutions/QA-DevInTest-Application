const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const { expect } = require('chai');
const World = require('../support/world');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/,
  async () => World.driver.findElement(By.id('primary-nav')));

const searchFields = {
  keyword: 'field--keyword',
  location: 'field--location',
  distance: 'field--radial-select',
};

Then(/^I should see the search form$/, async () => {
  const displayed = await World.driver
    .findElement(By.className('search__form'))
    .isDisplayed();

  expect(displayed).to.eql(true, 'Search field not displayed');
});

Then(/^I should see the search field for "(.*)"$/, async (fieldName) => {
  const fieldVisible = await World.driver
    .findElement(By.className('search__form'))
    .findElement(By.className(searchFields[fieldName]))
    .isDisplayed();

  expect(fieldVisible).to.eql(true, `Search field for ${fieldName} not displayed`);
});
