const { Given, When, Then } = require('cucumber');
const World = require('../support/world');
const { findElement, click } = require('../support/elements');
const { getRandomItem } = require('../support/helper');
const selectors = require('../selectors');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the '(.*)'\s?(?:block|searchbox|textbox|dropdown|button|link|text)?$/, async element => findElement(selectors[element]));

When(/^I click the '(.*)'\s?(?:button|link)?$/, async element => click(selectors[element]));

When(/^I click random '(.*)' on the '(.*)'$/, async (element, list) => {
  const randomItem = await getRandomItem(selectors[list]);
  const itemHeader = await randomItem.findElement(selectors[element]);
  await itemHeader.click();
});
