const { When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const World = require('../support/world');

When(/^I click on navigation bar link "(.*)"$/, async (linkText) => {
  await World.jobsPage.topLevelNavItem(linkText).click();
});

Then(/^I am taken to the "(.*)" page$/, async (expected) => {
  const url = await World.driver.getCurrentUrl();
  const urlRegex = new RegExp(`${expected}$`);
  expect(url).to.match(urlRegex);
});

When(/^I select the job sector "(.*)"$/, async (sectorName) => {
  await World.jobsPage.sectorNavItem(sectorName).click();
});

// Note: This does not guarantee that the right jobs are shown.
// We need to control the data to be sure the jobs is from a
// specific category
Then(/^jobs for sector "(.*)" are shown$/, async (sectorName) => {
  const title = await World.sectorJobsPage.sectorHeading.getText();
  const sectorRegex = new RegExp(sectorName);
  expect(title).to.match(sectorRegex);

  const filter = await World.sectorJobsPage.filter.getText();
  expect(filter).to.match(sectorRegex);
});

When(/^I click on the the first job ad$/, async () => {
  await World.driver.wait(until.elementIsVisible(World.sectorJobsPage.firstJobLink));
  await World.sectorJobsPage.firstJobLink.click();
});

Then(/^a job listing is shown$/, async () => {
  await World.driver.wait(until.elementLocated(By.className('job-description')));

  const descriptionPresent = await World.jobListingPage.jobDescription.isDisplayed();
  const applyButtonPresent = await World.jobListingPage.applyButton.isDisplayed();
  expect(descriptionPresent).to.eql(true, 'Job description not displayed');
  expect(applyButtonPresent).to.eql(true, 'Apply button not displayed');
});
