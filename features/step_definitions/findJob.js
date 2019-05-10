const { When } = require('cucumber');
const { randomItem } = require('../support/helper');
const selectors = require('../selectors');

When(/^I click random '(.*)' among '(.*)'$/, async (element, list) => {
  const randomJob = await randomItem(selectors[list]);
});
