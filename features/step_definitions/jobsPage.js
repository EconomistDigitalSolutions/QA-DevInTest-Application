const { Given, When, Then } = require('cucumber');
const assert = require('assert');

const World = require('../support/world');
const jobsHomePage = require('../pages/jobsHomePage');

Given(/^I go to the jobs page$/, async () => await World.goToJobsPage());

When(/^I choose to sign in$/, async () => {
  const signIn = await World.driver.findElement(jobsHomePage.topBar.signIn);

  await signIn.click();
});

When(/^I choose to create an account$/, async () => {
  const createAccount = await World.driver.findElement(jobsHomePage.topBar.createAccount);

  await createAccount.click();
});

When(/^I click (.*) in the navigation bar$/, async option => {
  const optionItem = {
    'Home': 'home',
    'Find a job': 'findAJob',
    'Job alerts': 'jobAlerts',
    'Search recruiters': 'searchRecruiters',
    'Jobs blog': 'jobsBlog'
  }[option];

  const optionElement = await World.driver.findElement(jobsHomePage.navigationBar[optionItem]);

  await optionElement.click();
});

When(/^I click (.*) in the footer$/, async option => {
  const optionItem = {
    'About Us': 'aboutUs',
    'Contact Us': 'contactUs',
    'Terms & Conditions': 'termsAndConditions',
    'Privacy Policy': 'privacyPolicy',
    'Advertise with us': 'advertiseWithUs'
  }[option];

  const optionElement = await World.driver.findElement(jobsHomePage.footer[optionItem]);

  await optionElement.click();
});

When(/^I click the first sector$/, async () => {
  const bankingAndFinance = await World.driver.findElement(
    jobsHomePage.sector.links.bankingAndFinance
  );

  /*
   * Cannot get this value once the page changes and I need it for the
   * next step.
   * (Not a great approach, but works for now and time is tight).
   */
  World.FIRSTSECTOR_NAME = await bankingAndFinance.getText();

  await bankingAndFinance.click();
});

When(/^I enter the search keyword (.*)$/, async keyword => {
  const keywordField = await World.driver.findElement(jobsHomePage.searchForm.keyword);

  keywordField.sendKeys(keyword);
});

When(/^I submit my search criteria$/, async () => {
  const searchForm = await World.driver.findElement(jobsHomePage.searchForm.container);
  
  await searchForm.submit();
});

Then (/^I am in the Jobs page$/, async () => {
  const currentUrl = await World.driver.getCurrentUrl();
  const { baseUrl } = World;

  // Oddly, currentUrl is adding a trailing slash here.
  assert.equal(currentUrl, baseUrl + '/', 'Was not in Jobs page');
});

Then(/^I can see the (.*)$/, async area => {
  const areaItem = {
    'navigation bar': 'navigationBar',
    'search form': 'searchForm',
    'sector lists': 'sector',
    'jobs blog': 'jobsBlog',
    'featured jobs': 'featuredJobs',
    'footer': 'footer'
  }[area];

  const areaElement = await World.driver.findElement(jobsHomePage[areaItem].container);

  assert(await areaElement.isDisplayed(), `${area} was not displayed`);
});

Then(/^the user navigation is visible$/, async () => {
  const userNavigation = await World.driver.findElement(jobsHomePage.topBar.userNavigation);

  assert(await userNavigation.isDisplayed(), 'User navigation was not displayed');
});
