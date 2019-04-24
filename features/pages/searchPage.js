const { By } = require('selenium-webdriver');

const searchPage = {
    header: By.id('browsing'),
    jobs: {
        locations: By.css('.lister__meta-item--location'),
        details: By.css('.lister__details'),
        viewDetailsButtons: By.css('#listing .lister__view-details a')
    }
};

module.exports = searchPage;
