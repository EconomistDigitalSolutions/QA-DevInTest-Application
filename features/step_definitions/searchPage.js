const { Then } = require('cucumber');
const assert = require('assert');

const World = require('../support/world');
const searchPage = require('../pages/searchPage');

Then(/^I am taken to the jobs list for the first sector$/, async () => {
  const firstSectorName = World.FIRSTSECTOR_NAME;
  const header = await World.driver.findElement(searchPage.header);
  const headerText = await header.getText();

  const expected = new RegExp(`^${firstSectorName}`);

  assert(
    headerText.match(expected),
    `Expected "${headerText}" to start with "${firstSectorName}"`
  );
});

Then(/^I choose to view details for a job$/, async () => {
  const viewDetailsButtons = await World.driver.findElements(
    searchPage.jobs.viewDetailsButtons
  );

  await viewDetailsButtons[0].click();
});

Then(/^I see jobs mentioning (.*)$/, async word => {
  const jobDetails = await World.driver.findElements(searchPage.jobs.details);

  assert(jobDetails.length > 0, 'No jobs found');

  jobDetails.forEach(async jobDetail => {
    const detailText = await jobDetail.getText();

    assert(
      detailText.includes(word),
      `Expected to find "${word}" in job detail "${detailText}"`
    );
  });
});