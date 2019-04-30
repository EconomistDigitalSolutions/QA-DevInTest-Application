const { jobsHeaderTemplate } = require('./templates');
const sector = require('../../constants/sectors');

module.exports = {
  'Jobs Header': {
    xpath: '//*[@id=\'main\']//h1[contains(text(),\'Found\') and contains(text(),\'job\')]',
  },
  'Banking And Finance Header': {
    xpath: jobsHeaderTemplate(sector['Banking And Finance']),
  },
  'Government Header': {
    xpath: jobsHeaderTemplate(sector.Government),
  },
  'Academia Header': {
    xpath: jobsHeaderTemplate(sector.Academia),
  },
  'Primary And Utility Header': {
    xpath: jobsHeaderTemplate(sector['Primary And Utility']),
  },
  'Charity Header': {
    xpath: jobsHeaderTemplate(sector.Charity),
  },
  'International Public Sector Header': {
    xpath: jobsHeaderTemplate(sector['International Public Sector']),
  },
  'NGO Header': {
    xpath: jobsHeaderTemplate(sector.NGO),
  },
  'Consultancy Header': {
    xpath: jobsHeaderTemplate(sector.Consultancy),
  },
  'Development Header': {
    xpath: jobsHeaderTemplate(sector.Development),
  },
  'Health Header': {
    xpath: jobsHeaderTemplate(sector.Health),
  },
  'Humanitarian Header': {
    xpath: jobsHeaderTemplate(sector.Humanitarian),
  },
  'Other Header': {
    xpath: jobsHeaderTemplate(sector.Other),
  },
  'Filter Current Sector': {
    xpath: '//*[@class=\'filter\']//*[contains(@class,\'category-header\') and .=\'Sector\']/..//*[@class=\'filter__parent-term\']',
  },
  'Filter Keywords': {
    id: 'keyword',
  },
  'Filter Location Country': {
    id: 'location',
  },
  'Filter Location Radial': {
    xpath: '//*[@id=\'RadialLocation\']//option[@selected]',
  },
  'Job Item Block': {
    className: 'lister__item',
  },
  'Job Item Name Link': {
    xpath: '//*[contains(@class,\'lister__header\')]//a',
  },
};
