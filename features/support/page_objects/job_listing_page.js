const BasePage = require('./base_page');

class JobListingPage extends BasePage {
  get jobDescription() { return this.findByClassName('job-description'); }

  get applyButton() { return this.findByClassName('button--apply'); }
}

module.exports = JobListingPage;
