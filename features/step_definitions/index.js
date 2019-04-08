const { Given, When, Then } = require('cucumber');
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

Then(/^the sector list is shown$/, async () => {
  const isDisplayed = await World.jobsPage.sectorList.isDisplayed();
  expect(isDisplayed).to.eql(true, 'Sector list not displayed');
});

Then(/^the sector list contains job sectors$/, async () => {
  const sectors = await World.jobsPage.sectorListItems;
  expect(sectors.length).to.be.gte(1, 'No job sectors found');
});

Then(/^the jobs blog is shown$/, async () => {
  const isDisplayed = await World.jobsPage.jobsBlog.isDisplayed();
  expect(isDisplayed).to.eql(true, 'Jobs blog not displayed');
});

Then(/^the jobs blog contains articles$/, async () => {
  const articles = await World.jobsPage.jobsBlogArticles;
  expect(articles.length).to.be.gte(1, 'No articles found');
});

Then(/^the Featured Jobs brick is shown$/, async () => {
  const isDisplayed = await World.jobsPage.featuredJobsBrick.isDisplayed();
  expect(isDisplayed).to.eql(true, 'Featured jobs brick not displayed');
});

Then(/^the Featured Jobs brick contains featured jobs$/, async () => {
  const jobs = await World.jobsPage.featuredJobs;
  expect(jobs.length).to.be.gte(1, 'No featured jobs found');
});

Then(/^the footer is shown$/, async () => {
  const isDisplayed = await World.jobsPage.footer.isDisplayed();
  expect(isDisplayed).to.eql(true, 'Footer not displayed');
});

When(/^I click on the sign in link$/, async () => {
  await World.jobsPage.loginLink.click();
});

Then(/^I am taken to the sign in page$/, async () => {
  const isDisplayed = await World.logonPage.loginForm.isDisplayed();
  expect(isDisplayed).to.eql(true, 'Login form not displayed');
});

When(/^I click on the create account link$/, async () => {
  await World.jobsPage.signupLink.click();
});

Then(/^I am taken to the registration page$/, async () => {
  const isDisplayed = await World.logonPage.signupForm.isDisplayed();
  expect(isDisplayed).to.eql(true, 'Signup form not displayed');
});
