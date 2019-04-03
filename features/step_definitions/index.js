const { Given, When, Then } = require("cucumber");
const { By, until} = require("selenium-webdriver");
const World = require("../support/world");
const assert = require("assert");

/*
Pawan Kumar
It was a fun task. I  definately had something to learn.

To start off the task, I tried to understand the problem using pen and paper. I
wrote down keywords and started breaking the problem down into smaller pieces. I
started thinking about which test cases I can group together and started thinking
about the git repo as well. I planned out all my branches and all the steps on paper
and it helped me start off the solution to the problem.

I came across a few problems during the task. getCurrentUrl() method was not working
for me so I had to spent hours searching for a solution. And I came up with a solution
after I kept at it and tried again. To overcome this problem, I had to understand how
promises work.
*/

//Global variables for storing comparison links
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


//Page rendering: Checks significant components of the page have been rendered

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


//Account links: Checks whether sign in and create an account links go to the right page.

When('I click sign in', async () => {
  return World.driver.findElement(By.css('#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.jobseekers__item.jobseekers__item--sign-in > a')).click();
});

Then('I should see login page', async () => {
  await World.driver.getCurrentUrl().then(function(url){
     assert.equal(url, "https://jobs.economist.com/logon/");
  });
});

When('I click Create an Account', async () => {
  return World.driver.findElement(By.css('#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.togglable-nav__item--last.jobseekers__item.jobseekers__item--create-account > a')).click();
});

Then('I should see create account page', async () => {
  await World.driver.getCurrentUrl().then(function(url){
     assert.equal(url, "https://jobs.economist.com/register/");
  });
});

When('I click home', async () => {
  return World.driver.findElement(By.linkText('Home')).click();
});

Then('Redirects to home page', async () => {
   await World.driver.getCurrentUrl().then(function(url){
     assert.equal(url, $HOME);
    });
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


  //SEARCHING: Checks whether clicking a sector shows relevant results

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



//Footer links: Checks if footer navigation links go to the right page. Social links not tested.

When('I click on About us', async () => {
 await World.driver.findElement({linkText: "About Us"}).click();
});

Then('Redirect to About us', async () => {
 await World.driver.getCurrentUrl().then(function(url){
    assert.equal(url, "https://jobs.economist.com/about-us/");
 });
});

When('I click on Contact us', async () => {
 return await World.driver.findElement({linkText: "Contact Us"}).click();
});

Then('Redirect to Contact us', async () => {
 await World.driver.getCurrentUrl().then(function(url){
    assert.equal(url, "https://jobs.economist.com/contact-us/");
 });
});

When('I click on Terms and conditions', async () => {
 return await World.driver.findElement({linkText: "Terms & Conditions"}).click();
});

Then('Redirect to Terms and conditions', async () => {
 await World.driver.getCurrentUrl().then(function(url){
    assert.equal(url, "https://jobs.economist.com/terms-and-conditions/");
 });
});

When('I click on Privacy policy', async () => {
 return await World.driver.findElement({linkText: "Privacy Policy"}).click();
});

Then('Redirect to Privacy policy', async () => {
 await World.driver.getCurrentUrl().then(function(url){
    assert.equal(url, "https://jobs.economist.com/privacy-policy/");
 });
});

When('I click on Advertise with us', async () =>{
 await World.driver.findElement({linkText: "Advertise with us"}).click();
});

Then('Redirect to Advertise with us', async () =>{
 await World.driver.getCurrentUrl().then(function(url){
    assert.equal(url, "https://recruiters.jobs.economist.com/");
 });
});
