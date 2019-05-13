# Software Development Engineer in Test Assessment
This is an integration test suite for https://jobs.economist.com/

# Technologies used
 - NodeJS/JavaScript
 - Cucumber
 - Selenium-Webdriver
 - Webdriver-manager
 - Chromedriver
 - Chai
 - Cucumber-html-reporter
 - Eslint

# Automated features 
## home.feature
 - Jobs page renders correctly with the following components visible:
    - navigation bar
    - search fields
    - sector lists
    - jobs blog
    - featured jobs
    - footer
## login.feature
 - Both 'Sign in' and 'Create account' links go to their respective pages.
## header.feature
 - Each of the links in the navigation bar is functional and goes to the correct page.
## browseBySector.feature
 - Clicking on a sector shows a list of jobs from only that sector. Clicking further on a job listing shows you the job details, with an 'apply' button.
## jobSearch.feature
 - Searching for a job correctly displays relevant search results.
## footer.feature
 - Ensuring all the links in the footer are functional

# Running the tests
To get the tests running, ensure that you have `NodeJS`, `npm`, `Google Chrome` and `Java` installed. Then run the following commands to start the tests:
1. `npm install`
2. `npm run test` - to run all tests without creating a report json file
3. `npm run test <feature>` (e.g. `npm run test features/header.feature`) - to run a specific feature
4. `npm run test <feature:scenario_line>` (e.g. `npm run test features/header.feature:58`) - to run a specific scenario from the feature
5. `npm run test:all` - to run all tests with creating a report json file
6. `node reporter.js` - to generate a cucumber report after running `npm run test:all`
