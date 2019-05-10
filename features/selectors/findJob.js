const { headerTitle, browseFilter } = require('./templates');

const sector = 'Sector';

module.exports = {
  'Found jobs': {
    xpath: '//h1[contains(text(),"Found")]',
  },
  'Jobs list': {
    xpath: '//*[contains(@class,"lister__item")]',
  },
  'Jobs list header': {
    xpath: '//*[contains(@class, "lister__header")]//a',
  },
  Browse: {
    id: 'browse',
  },
  'Banking and finance jobs': {
    xpath: headerTitle('Banking and finance jobs'),
  },
  'Banking and finance Filter': {
    xpath: browseFilter(sector, 'Banking and finance'),
  },
  'Business services jobs': {
    xpath: headerTitle('Business services jobs'),
  },
  'Business services Filter': {
    xpath: browseFilter(sector, 'Business services'),
  },
  'Government jobs': {
    xpath: headerTitle('Government jobs'),
  },
  'Government Filter': {
    xpath: browseFilter(sector, 'Government'),
  },
  'Academia jobs': {
    xpath: headerTitle('Academia jobs'),
  },
  'Academia Filter': {
    xpath: browseFilter(sector, 'Academia'),
  },
  'Primary and utility jobs': {
    xpath: headerTitle('Primary and utility jobs'),
  },
  'Primary and utility Filter': {
    xpath: browseFilter(sector, 'Primary and utility'),
  },
  'Charity jobs': {
    xpath: headerTitle('Charity jobs'),
  },
  'Charity Filter': {
    xpath: browseFilter(sector, 'Charity'),
  },
  'International public sector jobs': {
    xpath: headerTitle('International public sector jobs'),
  },
  'International public sector Filter': {
    xpath: browseFilter(sector, 'International public sector'),
  },
  'NGO jobs': {
    xpath: headerTitle('NGO jobs'),
  },
  'NGO Filter': {
    xpath: browseFilter(sector, 'NGO'),
  },
  'Consultancy jobs': {
    xpath: headerTitle('Consultancy jobs'),
  },
  'Consultancy Filter': {
    xpath: browseFilter(sector, 'Consultancy'),
  },
  'Development jobs': {
    xpath: headerTitle('Development jobs'),
  },
  'Development Filter': {
    xpath: browseFilter(sector, 'Development'),
  },
  'Health jobs': {
    xpath: headerTitle('Health jobs'),
  },
  'Health Filter': {
    xpath: browseFilter(sector, 'Health'),
  },
  'Humanitarian jobs': {
    xpath: headerTitle('Humanitarian jobs'),
  },
  'Humanitarian Filter': {
    xpath: browseFilter(sector, 'Humanitarian'),
  },
  'Other jobs': {
    xpath: headerTitle('Other jobs'),
  },
  'Other Filter': {
    xpath: browseFilter(sector, 'Other'),
  },
};
