const { By } = require('selenium-webdriver');

const jobDetails = {
    apply: By.css('.job-actions__action--applylink a'),
    description: By.css('.job-description')
};

module.exports = jobDetails;
