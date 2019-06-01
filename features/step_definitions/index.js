const { Given, Then, When } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

//Home.feature functions

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

//footer.feature functions
//When clicking a link...
When (/^I click the About Us link in the footer$/, async () =>{
  return World.driver.findElement(By.linkText('About Us')).click();
})

When (/^I click the Contact Us link in the footer$/, async () =>{
  return World.driver.findElement(By.linkText('Contact Us')).click();
})

When (/^I click the Terms and Conditions link in the footer$/, async () =>{
  return World.driver.findElement(By.linkText('Terms & Conditions')).click();
})

When (/^I click the Privacy Policy link in the footer$/, async () =>{
  return World.driver.findElement(By.linkText('Privacy Policy')).click();
})

When (/^I click the Advertise with us link in the footer$/, async () =>{
  return World.driver.findElement(By.linkText('Advertise with us')).click();
})


Then (/^I should see the About Us Page/, async () =>{
  return World.driver.getCurrentUrl().then((currentURL) => {
      if(currentURL != "https://jobs.economist.com/about-us/"){
        throw "URL is incorrect!"
      }
  });
})


Then (/^I should see the Contact Us Page/, async () =>{
  return World.driver.getCurrentUrl().then((currentURL) => {
      if(currentURL != "https://jobs.economist.com/contact-us/"){
        throw "URL is incorrect!"
      }
  });
})

Then (/^I should see the Terms and Conditions Page/, async () =>{
  return World.driver.getCurrentUrl().then((currentURL) => {
      if(currentURL != "https://jobs.economist.com/terms-and-conditions/"){
        throw "URL is incorrect!"
      }
  });
})

Then (/^I should see the Privacy Policy Page/, async () =>{
  return World.driver.getCurrentUrl().then((currentURL) => {
      if(currentURL != "https://jobs.economist.com/privacy-policy/"){
        throw "URL is incorrect!"
      }
  });
})

Then (/^I should see the Advertise with us Page/, async () =>{
  return World.driver.getCurrentUrl().then((currentURL) => {
      if(currentURL != "https://recruiters.jobs.economist.com/"){
        throw "URL is incorrect!"
      }
  });
})

//signInCreate Feature
When (/^I click the Create Account link$/, async () =>{
  return World.driver.findElement(By.linkText('Create account')).click();
})

When (/^I click the Sign In link$/, async () =>{
  return World.driver.findElement(By.linkText('Sign in')).click();
})

Then (/^I should see the Register Page/, async () =>{
  return World.driver.getCurrentUrl().then((currentURL) => {
      if(currentURL != "https://jobs.economist.com/register/"){
        throw "URL is incorrect!"
      }
  });
})

Then (/^I should see the Log on Page$/, async () =>{
  return World.driver.getCurrentUrl().then((currentURL) => {
      if(currentURL != "https://jobs.economist.com/logon/"){
        throw "URL is incorrect!"
      }
  });
})
