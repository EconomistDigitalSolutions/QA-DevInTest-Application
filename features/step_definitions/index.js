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
  return World.driver.findElement(By.id('keywords'));
});

Then('I should see sector lists', async () => {
  return World.driver.findElement(By.className('browse__items'));
});

Then('I should see jobs blog', async () => {
  return World.driver.findElement(By.className('articles'));
});

Then('I should see featured jobs', async () => {
  return World.driver.findElement(By.className('featured-jobs__item'));
});

Then('I should see the footer', async () => {
  return World.driver.findElement(By.css('footer'));
});

When('I click sign in', async () => {
  return World.driver.findElement(By.css('#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.jobseekers__item.jobseekers__item--sign-in > a')).click();
});

Then('I should see login page', async () => {
  return World.driver.findElement(By.css('#main > div > div > div.grid-item.five-sixths.lap-one-whole.palm-one-whole > div > div:nth-child(1) > h1'));
});

When('I click Create an Account', async () => {
  return World.driver.findElement(By.css('#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.togglable-nav__item--last.jobseekers__item.jobseekers__item--create-account > a')).click();
});

Then('I should see create account page', async () => {
  return World.driver.findElement(By.id('create-account'));
});

When('I click home', async () => {
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

When('I click Find a job', async () => {
  return World.driver.findElement(By.linkText('Find a job')).click();
});

Then('Redirects to Find a job page', async () => {
  await World.driver.getCurrentUrl().then(function(url){
    assert.equal(url, $FIND_JOB);
  });
});

When('I click Job alerts', async () => {
  return World.driver.findElement(By.linkText('Job alerts')).click();
});

Then('Redirects to Job alerts page', async () => {
  await World.driver.getCurrentUrl().then(function(url){
     assert.equal(url, $JOB_ALERT);
});
});

When('I click Search recruiters', async () => {
  return World.driver.findElement(By.linkText('Search recruiters')).click();
});

 Then('Redirects to Search recruiters page', async () => {
   if (World.driver.getCurrentUrl() ==  $SEARCH_RECTRUITER) {
     return World.driver.getCurrentUrl();
   }
});

When('I click Jobs blog', async () => {
  return World.driver.findElement(By.linkText('Jobs blog')).click();
});

Then('Redirects to Jobs blog', async () => {
  await World.driver.getCurrentUrl().then(function(url){
     assert.equal(url, $JOBS_BLOG);
  });
});

  //SEARCHING

When('I click on a sector', async () => {
  return World.driver.findElement(By.linkText("NGO")).click();
});

Then('I should see jobs from that sector', async () => {
  sector = await World.driver.findElement(By.id("browsing")).getText();
  assert.equal(sector, "NGO jobs");
});

When('I click on a job', async () => {
  World.driver.findElement(By.css("div.lister__footer.cf::after")).click();
});

Then('I should see job details', async () => {
  if (World.driver.findElement(By.css(".job-description")) != null){
     console.log("Visible");
   }
   else {
     console.log("Not found");
   }
});

Then('Apply button', async () => {
  if (World.driver.findElement(By.linkText("Apply")) != null) {
    console.log("Apply visible!");
  } else {
    console.log("Not visible.");
  }
});

When('I search a job', async () => {
  World.driver.findElement(By.id("keywords")).sendKeys("Computing");
  World.driver.findElement(By.css(".submit input[type='submit']")).click();
});

When('I click on the first search', async () => {
  World.driver.findElement(By.css("div.lister__footer.cf::after")).click();
});

Then('Results will match search keyword', async () => {
  result = World.driver.findElement(By.id("searching")).innerHTML;
  console.log(result);
  if (result.includes("Computing")) {
    console.log("Success");
  }
});
