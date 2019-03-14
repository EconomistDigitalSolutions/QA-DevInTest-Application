const assert = require('assert')
const mappings = require('./mappings');
const { Given, Then, When } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');


Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then('I should see the {string}', async function (element) {
  assert(await World.driver.findElement(By.css(mappings.jobsPageVisibleElementsMap.get(element))).isDisplayed())
});

When('I click on {string}', async function (link) {
  let linkToClick = await World.driver.findElement(By.css(mappings.jobsPageLinks.get(link)))
  linkToClick.click()
});

Then('I should see the {string} page', async function (page) {
  let pageTitle = await World.driver.getTitle();
  assert.equal(pageTitle,mappings.pageTitles.get(page));
});
