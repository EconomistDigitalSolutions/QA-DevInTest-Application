const { Given, When, Then } = require('cucumber');
const World = require('../support/world');
const { findElement, click } = require('../support/elements');
const selectors = require('../selectors');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the '(.*)'\s?(?:block|searchbox|textbox|dropdown|button|link)?$/, async element => findElement(selectors[element]));

When(/^I click the '(.*)'\s?(?:button|link)?$/, async element => click(selectors[element]));
