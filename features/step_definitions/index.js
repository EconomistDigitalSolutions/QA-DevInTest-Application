const { Given, When, Then } = require('cucumber');
const { assert } = require('chai');
const World = require('../support/world');
const {
  findElement, click,
} = require('../support/elements');
const { getRandomItem } = require('../support/helper');
const log = require('../support/logger');
const selectors = require('../selectors');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the '(.*)'\s?(?:block|searchbox|textbox|dropdown|button|link|text)?$/, async element => findElement(selectors[element]));

When(/^I click the '(.*)'\s?(?:button|link)?$/, async element => click(selectors[element]));

When(/^I click random '(.*)'$/, async (element) => {
  const randomItem = await getRandomItem(selectors[element]);
  log(`Clicking the '${await randomItem.getText()}' item`);
  await randomItem.click();
});

Then(/^the '(.*)' link should go to the '(.*)'$/, async (link, page) => {
  const tabs = await World.driver.getAllWindowHandles();
  await World.driver.switchTo().window(tabs.pop());
  const url = await World.driver.getCurrentUrl();
  assert.equal(url, page, `The '${link}' link redirects to the incorrect page`);
});
