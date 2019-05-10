const { headerTitle, formBlock } = require('./templates');

module.exports = {
  'Search recruiters title': {
    xpath: headerTitle('Search recruiters'),
  },
  'Recruiters list': {
    id: 'listing',
  },
  'Recruiter search': {
    xpath: formBlock('Recruiter search'),
  },
};
