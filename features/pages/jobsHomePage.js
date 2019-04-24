const { By } = require('selenium-webdriver');

/*
 * NOTES on selectors:
 * 1. avoid using displayed text: can be dynamic (i.e. different language based on location).
 * 2. avoid using hrefs: subject to change, and better to only require a single change
 *    in the cucumber tests.
 */
const jobsHomePage = {
    featuredJobs: {
        container: By.className('featured-jobs brick')
    },

    footer: {
        /*
         * It's usually bad practice to assume the order of elements like this,
         * but as there are no 'strong' attributes in the DOM here and this
         * is a static footer, it's a good test that the order (and content)
         * remains the same: we'd want to know if it changed unexpectedly.
         */
        container: By.css('.tertiary-nav'),
        aboutUs: By.css('.tertiary-nav__item:nth-of-type(1) a'),
        contactUs: By.css('.tertiary-nav__item:nth-of-type(2) a'),
        termsAndConditions: By.css('.tertiary-nav__item:nth-of-type(3) a'),
        privacyPolicy: By.css('.tertiary-nav__item:nth-of-type(4) a'),
        advertiseWithUs: By.css('.tertiary-nav__item:nth-of-type(5) a')
    },

    jobsBlog: {
        container: By.className('articles brick')
    },

    navigationBar: {
        container: By.id('primary-nav'),
        home: By.css('.primary-nav__item--home a'),
        findAJob: By.css('.primary-nav__item--find-a-job a'),
        jobAlerts: By.css('.primary-nav__item--jbe a'),
        searchRecruiters: By.css('.primary-nav__item--recruiters a'),
        jobsBlog: By.css('.primary-nav__item--careers-advice a')
    },

    searchForm: {
        container: By.css('.search__form'),
        keyword: By.css('.search__form #keywords'),
        location: By.css('.search__form #location'),
        within: By.css('.search__form #RadialLocation')
    },

    sector: {
        container: By.className('browse brick'),
        links: {
            bankingAndFinance: By.css('.facet-links__link--banking-and-finance a'),
            government: By.css('.facet-links__link--government a'),
            acedemia: By.css('.facet-links__link--acedemia a')
            // etc...
        }
    },

    topBar: {
        container: By.id('top-bar'),
        signIn: By.css('.jobseekers__item--sign-in a'),
        createAccount: By.css('.jobseekers__item--create-account a'),
        userNavigation: By.css('.jobseekers__item--username a')
    }
};

module.exports = jobsHomePage;
