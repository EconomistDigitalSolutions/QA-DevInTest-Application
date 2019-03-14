const assert = require('assert')
const mappings = require('./mappings');
const { Given, Then, When } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');


Given(/^I go to the jobs page$/, () => World.goToJobsPage());

// jobsPageVisibleElementsMap should be updated whenever the test
// "Jobs page components check" examples change.
Then('I should see the {string}', async function (element) {
  assert(await World.driver.findElement(By.css(mappings.jobsPageVisibleElementsMap.get(element))).isDisplayed())
});

// jobsPageLinks should be updated whenever the test
// "'Sign in' and 'Create account' links go to correct pages." examples change.
When('I click on {string}', async function (link) {
  let linkToClick = await World.driver.findElement(By.css(mappings.jobsPageLinks.get(link)))
  linkToClick.click()
});

// pageTitles should be updated whenever the test
// "'Sign in' and 'Create account' links go to correct pages." examples change.
Then('I should see the {string} page', async function (page) {
  let pageTitle = await World.driver.getTitle();
  assert(pageTitle.startsWith(mappings.pageTitles.get(page)));
});
