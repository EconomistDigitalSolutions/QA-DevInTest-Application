const { Given, When, Then } = require("cucumber");
const { By, until} = require("selenium-webdriver");
const World = require("../support/world");
const assert = require("assert");




$HOME = "https://jobs.economist.com/";
$FIND_JOB = "https://jobs.economist.com/jobs/";
$JOB_ALERT = "https://jobs.economist.com/newalert/";
$SEARCH_RECTRUITER = "https://jobs.economist.com/employers/";
$JOBS_BLOG = "https://jobs.economist.com/careers/";

$NAV = "primary-nav";
$SEARCH_FIELD = "keywords";
$SECTOR_LIST = "browse__items";
$JOBS_BLOG = "articles";
$FEATURED_JOBS = "featured-jobs__item";
$FOOTER = "footer";


//Page rendering

Given(/^I go to the jobs page$/, () => World.goToJobsPage());
//if elements are found by selenium means they exist/rendered
Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id($NAV));
});

Then('I should see search fields', async () => {
  return World.driver.findElement(By.id($SEARCH_FIELD));
});

Then('I should see sector lists', async () => {
  return World.driver.findElement(By.className($SECTOR_LIST));
});

Then('I should see jobs blog', async () => {
  return World.driver.findElement(By.className($JOBS_BLOG));
});

Then('I should see featured jobs', async () => {
  return World.driver.findElement(By.className($FEATURED_JOBS));
});

Then('I should see the footer', async () => {
  return World.driver.findElement(By.css($FOOTER));
});

//Account links
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
   World.driver.getCurrentUrl().then(function(url){
     assert.equal(url, $JOBS_BLOG);
  });
});

  //SEARCHING

When('I click on a sector', async () => {
  return World.driver.findElement(By.linkText("NGO")).click();
});

Then('I should see jobs from that sector', async () => {
  var sector = await World.driver.findElement(By.id("browsing")).getText();
  assert.equal(sector, "NGO jobs");
});

When('I click on a job', async () => {
  World.driver.findElement({linkText: "View details"}).click();
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

var keyword = World.driver.findElement(By.id("searching")).getText();
  keyword.then((text) => {
    if (text.includes("Computing")) {
        console.log("Success!");
      } else {
        console.log("Failed!!");
      }
    });
});


//Footer links
When('I click on About us', async () => {
 // Write code here that turns the phrase above into concrete actions
 await World.driver.findElement({linkText: "About Us"}).click();
});

Then('Redirect to About us', async () => {
 // Write code here that turns the phrase above into concrete actions
 await World.driver.getCurrentUrl().then(function(url){
    assert.equal(url, "https://jobs.economist.com/about-us/");
 });
});

When('I click on Contact us', async () => {
 // Write code here that turns the phrase above into concrete actions
 return await World.driver.findElement({linkText: "Contact Us"}).click();
});

Then('Redirect to Contact us', async () => {
 // Write code here that turns the phrase above into concrete actions
 await World.driver.getCurrentUrl().then(function(url){
    assert.equal(url, "https://jobs.economist.com/contact-us/");
 });
});

When('I click on Terms and conditions', async () => {
 // Write code here that turns the phrase above into concrete actions
 return await World.driver.findElement({linkText: "Terms & Conditions"}).click();
});

Then('Redirect to Terms and conditions', async () => {
 // Write code here that turns the phrase above into concrete actions
 await World.driver.getCurrentUrl().then(function(url){
    assert.equal(url, "https://jobs.economist.com/terms-and-conditions/");
 });
});

When('I click on Privacy policy', async () => {
 // Write code here that turns the phrase above into concrete actions
 return await World.driver.findElement({linkText: "Privacy Policy"}).click();

});

Then('Redirect to Privacy policy', async () => {
 // Write code here that turns the phrase above into concrete actions
 await World.driver.getCurrentUrl().then(function(url){
    assert.equal(url, "https://jobs.economist.com/privacy-policy/");
 });
});

When('I click on Advertise with us', async () =>{
 // Write code here that turns the phrase above into concrete actions
 await World.driver.findElement({linkText: "Advertise with us"}).click();
});

Then('Redirect to Advertise with us', async () =>{
 // Write code here that turns the phrase above into concrete actions
 await World.driver.getCurrentUrl().then(function(url){
    assert.equal(url, "https://recruiters.jobs.economist.com/");
 });
});
