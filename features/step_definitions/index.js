const { Given, When, Then } = require("cucumber");
const { By } = require("selenium-webdriver");
const World = require("../support/world");
const assert = require("assert");


$HOME = "https://jobs.economist.com/";
$FIND_JOB = "https://jobs.economist.com/jobs/";
$JOB_ALERT = "https://jobs.economist.com/newalert/";
$SEARCH_RECTRUITER = "https://jobs.economist.com/employers/";
$JOBS_BLOG = "https://jobs.economist.com/careers/";

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

When('I click sign in', async () => {
      // Write code here that turns the phrase above into concrete actions
      return World.driver.findElement(By.css('#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.jobseekers__item.jobseekers__item--sign-in > a')).click();
    });

Then('I should see login page', function () {
            // Write code here that turns the phrase above into concrete actions
            return World.driver.findElement(By.css('#main > div > div > div.grid-item.five-sixths.lap-one-whole.palm-one-whole > div > div:nth-child(1) > h1'));
          });

When('I click Create an Account', function () {
           // Write code here that turns the phrase above into concrete actions
           return World.driver.findElement(By.css('#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.togglable-nav__item--last.jobseekers__item.jobseekers__item--create-account > a')).click();
          });

Then('I should see create account page', function () {
           // Write code here that turns the phrase above into concrete actions
           return World.driver.findElement(By.id('create-account'));
        });

When('I click home', function () {

   // Write code here that turns the phrase above into concrete actions
   return World.driver.findElement(By.linkText('Home')).click();
 });


 Then('Redirects to home page', async () => {
   // assert.equal(World.driver.getCurrentUrl(), $HOME);
   // String CurrentUrl = World.driver.getCurrentUrl();
   // World.driver.wait(1000*3);

     await World.driver.getCurrentUrl().then(function(url){
       assert.equal(url, $HOME);
     });
   // World.driver.getCurrentUrl().then(url => {console.log('current url: "' + url + '"');});
   // var currentUrl = World.driver.getCurrentUrl().toString();

   // assert.equal(currentUrl, "https://jobs.economist.com");
   // var gettingCurrent = World.driver.getCurrentUrl();
   // assert.equal(gettingCurrent, $HOME);
//
//    var currentUrl;
//
//   World.driver.getCurrentUrl().then(function () {
//   assert.equal(currentUrl, $HOME);
// });

// String URL = World.driver.getCurrentUrl();
// Assert.assertEquals(URL, "https://jobs.economist.com/" );

 });


 When('I click Find a job', function () {
   // Write code here that turns the phrase above into concrete actions
   return World.driver.findElement(By.linkText('Find a job')).click();
 });

 Then('Redirects to Find a job page', async () => {
   // Write code here that turns the phrase above into concrete actions
   await World.driver.getCurrentUrl().then(function(url){
     assert.equal(url, $FIND_JOB);
   });
  });

 When('I click Job alerts', function () {
   // Write code here that turns the phrase above into concrete actions
   return World.driver.findElement(By.linkText('Job alerts')).click();
 });

 Then('Redirects to Job alerts page', async () => {
   // Write code here that turns the phrase above into concrete actions
   await World.driver.getCurrentUrl().then(function(url){
     assert.equal(url, $JOB_ALERT);
   });
  });

 When('I click Search recruiters', function () {
   // Write code here that turns the phrase above into concrete actions
   return World.driver.findElement(By.linkText('Search recruiters')).click();
 });

 Then('Redirects to Search recruiters page', async () => {
   // Write code here that turns the phrase above into concrete actions
   if (World.driver.getCurrentUrl() ==  $SEARCH_RECTRUITER) {
     return World.driver.getCurrentUrl();
   }
 });

 When('I click Jobs blog', function () {
   // Write code here that turns the phrase above into concrete actions
   return World.driver.findElement(By.linkText('Jobs blog')).click();
 });

  Then('Redirects to Jobs blog', async () => {
   // Write code here that turns the phrase above into concrete actions
   await World.driver.getCurrentUrl().then(function(url){
     assert.equal(url, $JOBS_BLOG);
   });
  });
