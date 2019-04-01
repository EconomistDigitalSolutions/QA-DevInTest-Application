const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id('primary-nav'));
});

Then('I should see search fields', async () => {
           // Write code here that turns the phrase above into concrete actions
           return World.driver.findElement(By.id('keywords'));
         });

Then('I should see sector lists', async () => {
    // Write code here that turns the phrase above into concrete actions
            return World.driver.findElement(By.className('browse__items'));
        });

Then('I should see jobs blog', async () => {
    // Write code here that turns the phrase above into concrete actions
             return World.driver.findElement(By.className('articles'));
      });

Then('I should see featured jobs', async () => {
      // Write code here that turns the phrase above into concrete actions
      return World.driver.findElement(By.className('featured-jobs__item'));
    });


Then('I should see the footer', async () => {
      // Write code here that turns the phrase above into concrete actions
        return World.driver.findElement(By.css('footer'));
      });

Given('I click on sign in', async () => {
              // Write code here that turns the phrase above into concrete actions
              return World.driver.findElement(By.id(''));
            });

Then('I should see login page', async () => {
              // Write code here that turns the phrase above into concrete actions
                  return 'pending';
               });
