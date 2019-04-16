const { Given, When, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const assert = require('assert');
const World = require('../support/world');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id('primary-nav'));
});

Then(/^I should see the search fields$/, async () => {
  let radialLocation = await World.driver.findElement({ id: 'RadialLocation' });
  let location = await World.driver.findElement({ id: 'location' });
  let search = await World.driver.findElement({ css: "input[type='submit'][value='Search']" });
  let keywords = await World.driver.findElement({ id: 'keywords' });
  assert(radialLocation && location && search && keywords);
});

Then(/^I should see the sector lists$/, async () => {
  let links = await World.driver.findElements({ css: "ul[data-tinynav-header='Choose a Sector'] > li > a" });
  assert(links.length > 0);
});

Then(/^I should see the jobs blog$/, async () => {
  let jobs_heading = await World.driver.findElement({ xpath: "//h2[.='Jobs blog']" });
  let links = await World.driver.findElements({ css: "section.articles div.grid-item a" });
  assert(jobs_heading && links);
});

When('I click find a job link', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see jobs page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then(/^I should see the featured jobs$/, function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then(/^I should see the footer$/, function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
})


