const { Given, When, Then } = require('cucumber');
const { assert } = require('chai');
const World = require('../support/world');
const selectors = require('../selectors');
const socialMediaUrls = require('../../constants/socialMediaUrls');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the '(.*)'$/, async element => World.driver.findElement(selectors[element]));

When(/^I click '(.*)'$/, async element => World.driver.findElement(selectors[element]).click());

When(/^I should see the page with url '(.*)'$/, async (url) => {
  const windows = await World.driver.getAllWindowHandles();
  await World.driver.switchTo().window(windows.pop());
  const currentUrl = await World.driver.getCurrentUrl();
  assert.isTrue(currentUrl.startsWith(socialMediaUrls[url]), 'Url of the page is not correct');
});
