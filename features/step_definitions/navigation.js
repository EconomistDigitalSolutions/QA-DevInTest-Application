const { When, Then } = require('cucumber');
const { expect } = require('chai');
const World = require('../support/world');

When(/^I click on navigation bar link "(.*)"$/, async (linkText) => {
  await World.jobsPage.topLevelNavItem(linkText).click();
});

Then(/^I am taken to the "(.*)" page$/, async (expected) => {
  const url = await World.driver.getCurrentUrl();
  const urlRegexp = new RegExp(`${expected}$`);
  expect(url).to.match(urlRegexp);
});
