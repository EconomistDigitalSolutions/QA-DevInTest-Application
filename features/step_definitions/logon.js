const { When } = require('cucumber');

const World = require('../support/world');
const logon = require('../pages/logon');

const { baseUrl } = World;
const logonPath = '/logon/';
const logonUrl = `${baseUrl}${logonPath}`;

When(/^I go to the sign in page$/, async () => {
  await World.driver.get(logonUrl);
});

When(/^I enter email "(.*)" to sign in$/, async email => {
  const signInEmail = await World.driver.findElement(logon.signInForm.email);

  await signInEmail.sendKeys(email);
});

When(/^I enter password "(.*)" to sign in$/, async password => {
  const signInPassword = await World.driver.findElement(logon.signInForm.password);
  
  await signInPassword.sendKeys(password);
});

When(/^I submit my sign in details$/, async () => {
  const signInForm = await World.driver.findElement(logon.signInForm.container);
  
  await signInForm.submit();
});
