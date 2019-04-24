const { Then } = require('cucumber');
const assert = require('assert');

const World = require('../support/world');
const job = require('../pages/job');

Then(/^I see the job description$/, async () => {
  const description = await World.driver.findElement(job.description);

  assert(await description.isDisplayed(), 'Job details were not displayed');
});

Then(/^I can apply for the job$/, async () => {
  const apply = await World.driver.findElement(job.apply);

  assert(await apply.isDisplayed(), 'I cannot apply for this job');
});
