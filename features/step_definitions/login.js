const { When } = require('cucumber');
const { click } = require('../support/elements');
const selectors = require('../selectors');

When(/^I click '(.*)'\s?(?:button|link)?$/, async element => click(selectors[element]));
