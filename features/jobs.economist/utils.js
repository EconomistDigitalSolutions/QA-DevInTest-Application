const selectors = require('../selectors');

/**
 * Forming expected job object
 * @param {object} webElement of an object
 * @returns {object} formed job object
 */
async function getJobFromJobsPage(webElement){
  const job = {
  };
  job.Header = await webElement.findElement(selectors['Header'].locator).getText();
  if(await webElementIsPresent (webElement,selectors['Location'])){
    job.Location = await webElement.findElement(selectors['Location'].locator).getText();
  }
  job.Salary = await webElement.findElement(selectors['Salary'].locator).getText();
  job.Recruiter = await webElement.findElement(selectors['Recruiter'].locator).getText();
  return job;
}

/**
 * Getting random number
 * @param {object} arrayLenght top border of a range
 * @returns {string} random integer
 */
function getRandomJob(arrayLenght) {
  return Math.floor(Math.random() * arrayLenght);
}

/**
 * Checks if element is present
 * @param {object} webElement of an object
 * @param {object} selector expected item name
 * @returns {boolean} true if item is found or false if not
 */
async function webElementIsPresent(webElement, selector) {
  try {
    const result = await webElement.findElement(selector.locator);
    if (typeof result !== 'undefined') {
      return true;
    }
    return false;
  }catch(e){
    return false;
  }
}

module.exports = {
  getJobFromJobsPage,
  getRandomJob
};
