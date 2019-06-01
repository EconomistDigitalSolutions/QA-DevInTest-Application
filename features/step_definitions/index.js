const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id('primary-nav'));
})

Then (/^I should see the keywords field$/, async () =>{
  return World.driver.findElement(By.id('keywords'));
})

Then (/^I should see the location field$/, async () =>{
  return World.driver.findElement(By.id('location'));
})

Then (/^I should see the radial location field$/, async () =>{
  return World.driver.findElement(By.id('RadialLocation'));
})

Then (/^I should see the sector list/, async () =>{
  /*
  * Couldn't find any clear way to identify Browse jobs by Sector.
  * This appeared to be the best option?
  */
  return World.driver.findElement(By.className('browse__items'));
})

Then (/^I should see the jobs blog/, async () =>{
  /**
  * Similar to sector list, couldn't find a clear way to identify.
  */
  return World.driver.findElement(By.className('articles brick'));
})

Then (/^I should see the featured jobs/, async () =>{
  return World.driver.findElement(By.className('featured-jobs brick'));
})

Then (/^I should see the footer$/, async () =>{
  return World.driver.findElement(By.tagName('footer'));
})
