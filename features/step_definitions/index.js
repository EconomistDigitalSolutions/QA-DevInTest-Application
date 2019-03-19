const assert = require('assert')
const mappings = require('./mappings');
const { Given, Then, When } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');
var testContext = new Map() // Used to pass values between test steps.

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

// jobsPageVisibleElementsMap should be updated whenever the test
// "Jobs page components check" examples change.
Then('I should see the {string}', async function (element) {
  assert(await World.driver.findElement(By.css(mappings.jobsPageVisibleElementsMap.get(element))).isDisplayed())
});

// jobsPageLinks should be updated whenever the test
// "Check that links on the jobs page go to correct pages." examples change.
When('I click on {string}', async function (link) {
  let linkToClick = await World.driver.findElement(By.css(mappings.jobsPageLinks.get(link)))
  linkToClick.click()
});

// pageTitles should be updated whenever the test
// "Check that links on the jobs page go to correct pages." examples change.
Then('I should see the {string} page', async function (page) {
  let pageTitle = await World.driver.getTitle();
  assert(pageTitle.startsWith(mappings.pageTitles.get(page)));
});

Given('I go to the {string} page', async function(page){
  await World.goToJobsSubPage(mappings.pageUrl.get(page));
});

When('I click on the {string} job from the list', async function (job) {
  let jobs = await World.driver.findElements(By.className('lister__header'))
  if (job === "1st"){
    // Save the job title
    testContext.set('job title',await jobs[0].getText());
    await jobs[0].findElement(By.tagName('a')).click();
  }
});

Then('the job\'s details should be displayed', async function(){
  let jobTitle = await World.driver.findElement(By.css('.js-job-detail h1')).getText();
  assert(jobTitle.startsWith(testContext.get('job title')))
});
