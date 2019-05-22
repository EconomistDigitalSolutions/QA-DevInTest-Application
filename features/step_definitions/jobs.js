const { When} = require('cucumber');
const selectors = require('../selectors');
const { assert } = require('chai');
const dataReader = require('../support/helpers/dataReader');
const { fromPattern} = require('../support/helpers/transformers');
const {click,
  waitIsPresent,
  getText,
  findElementsOnPage,
} = require('../support/elements');
const {getJobFromJobsPage,
  getRandomJob, } = require('../jobs.economist/utils');

/**
 * Gets a list of jobs and stores them to the specified path
 * @param {string} dataPath specified path
 * This step executes the following actions:
 * 1. gets a list of jobs
 * 2. stores jobs to the specified path
 */
When(/^I get all job vacancies from the page and store them to '(.*)'$/, async (dataPath) => {
  const allJobs = await findElementsOnPage(selectors['Jobs']);
  dataReader.setObject(dataPath,allJobs);
});

/**
 * Gets random job number and stores it to the specified path
 * @param {string} jobs data path from where jobs should be takes
 * @param {string} dataPath specified path
 * This step executes the following actions:
 * 1. gets a list of jobs from the specified data path
 * 2. gets random job number
 * 3. stores job number to the specified path
 */
When(/^I choose any job from '(.*)' and store its number to '(.*)'$/, async (jobs, dataPath) => {
  const allJobs = dataReader.getObject(jobs);
  const randomJob = getRandomJob(allJobs.length);
  dataReader.setObject(dataPath,randomJob);
});

/**
 * Opens job details of the specified job
 * @param {string} element data path from where job is takes
 * @param {string} dataPath from where job number is taken
 * This step executes the following actions:
 * 1. gets a job number from the specified data path
 * 2. click view details in the specified job
 */
When(/^I move to job details clicking '(.*)' for '(.*)'$/, async (element,dataPath) => {
  const num = dataReader.getObject(dataPath);
  await click(fromPattern(selectors[element],num+1));
});

/**
 * Checks the actual job object is as expected
 * @param {string} dataPath if from where expected job object is taken
 * This step executes the following actions:
 * 1. gets expected job object from the specified path
 * 2. gets and sets actual values for :
 * - header
 * - location
 * - salary
 * - recruiter
 * 3. checks that actual job object is as expected
 */
/* eslint-disable complexity, max-statements */
When(/^Job details are as in '(.*)'$/, async (dataPath) => {
  const expected = dataReader.getObject(dataPath);
  const actual = {
  };
  if(expected.Header){
    actual.Header = await getText(selectors['Job header']);
  }
  if(expected.Location){
    actual.Location = await getText(selectors['Job location']);
  }
  if(expected.Salary){
    actual.Salary = await getText(selectors['Job salary']);
  }
  if(expected.Recruiter){
    actual.Recruiter = await getText(selectors['Job recruiter']);
  }
  assert.deepEqual(actual, expected,'Job details from Jobs page differ from job description');
});

/**
 * Gets job details for the specified job and stores them to the specified path
 * @param {string} number data path from where job number is takes
 * @param {string} jobs data path from where jobs are takes
 * @param {string} dataPath where job details are stored
 * This step executes the following actions:
 * 1. gets a list of jobs from the specified data path
 * 2. gets a job number from the specified data path
 * 3. gets job details for the specified job
 * 4. stores job details to the specified path
 */
When(/^I get job details for '(.*)' from '(.*)' and store them to '(.*)'$/, async (number,jobs, dataPath) => {
  const allJobs = dataReader.getObject(jobs);
  const jobNumber = dataReader.getObject(number);
  const job = await getJobFromJobsPage(allJobs[jobNumber]);
  dataReader.setObject(dataPath,job);
});

/**
 * Checks sector name after a page opens
 * @param {string} element specified sector name
 * This step executes the following actions:
 * 1. checks that a page opens
 * 2. gets text from an element
 * 3. checks that actual text is as expected
 */
When(/^Jobs page opens with '(.*)' selected in Sector$/, async (element) => {
  await waitIsPresent(selectors[element]);
  const expectedSectionName = element;
  const actualSectionName = await getText(selectors['Sector Section']);
  assert.deepEqual(actualSectionName,expectedSectionName,`Section is not ${expectedSectionName}`);
});

/**
 * Stores sector name to the specified path
 * @param {string} name specified sector name
 * @param {string} dataPath where job details are stored
 * This step executes the following actions:
 * 1. stores sector name to the specified path
 */
When(/^I store '(.*)' sector name to '(.*)'$/, (name,dataPath) => {
  dataReader.setObject(dataPath,name);
});