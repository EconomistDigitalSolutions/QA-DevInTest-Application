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

// Whenever the test examples change for tests:
//    "Check that links on the jobs page go to correct pages."
//    "Check that links on the jobs page's footer go to correct pages."
// the 'pageTitles' map should be updated.
Then('I should see the {string} page', async function (page) {
  let pageTitle = await World.driver.getTitle();
  assert(pageTitle.startsWith(mappings.pageTitles.get(page)));
});

Given('I go to the {string} page', async function(page){
  await World.goToJobsSubPage(mappings.pageUrl.get(page));
});

When('I click on the {string} job from the list', async function (job) {
  let jobs = await World.driver.findElements(By.className('lister__header'))
  var index = 0
  switch(job){
    case "1st":
      index = 0;
      break;
    case "2nd":
      index = 1;
      break;
    case "last":
      index = jobs.length - 1;
      break;
    default:
      index = 0
  }
  // Save the job title
  testContext.set('job title', await jobs[index].getText());
  await jobs[index].findElement(By.tagName('a')).click();
});

Then('the correct job should be displayed', async function(){
  let jobTitle = await World.driver.findElement(By.css('.js-job-detail h1')).getText();
  assert(jobTitle.startsWith(testContext.get('job title')))
});

Then('the job\'s details should be displayed', async function(){
  assert(await World.driver.findElement(By.className('job-description')).isDisplayed());
})

Then('an apply button should be visible', async function(){
  assert(await World.driver.findElement(By.className('button--apply')).isDisplayed());
})

When('I click on footer link {string}', async function(link){
  // No unique identifier exists for each element in the footer, therefore
  // we need to use link text for finding the right link.
  var navItems = await World.driver.findElements(By.css('.tertiary-nav__item a'))
  for (let item of navItems){
    var itemText = await item.getText()
    if(itemText===link){
      await item.click()
      return
    }
  }
  assert(false)
})
