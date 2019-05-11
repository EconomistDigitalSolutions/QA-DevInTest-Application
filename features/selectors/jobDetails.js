const { classContains } = require('./templates');

module.exports = {
  'Job description': {
    xpath: classContains('job-description'),
  },
  'Job details': {
    xpath: '//div[h1]',
  },
  'Location details': {
    xpath: '//div[contains(@class,"location")]/dd',
  },
  Apply: {
    xpath: '//a[contains(text(),"Apply") and not(contains(@class, "job-sticky-ctas"))]',
  },
};
