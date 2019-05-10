const { classContains } = require('./templates');

module.exports = {
  'Job description': {
    xpath: classContains('job-description'),
  },
  Apply: {
    xpath: '//a[contains(text(),"Apply") and not(contains(@class, "job-sticky-ctas"))]',
  },
};
