const {pageModule} = require('./templates');
module.exports = {
  'Sector Section': {
    selector: '//*[@class=\'filter\']//*[contains(text(),\'Sector\')]/following-sibling::*[contains(@class,\'accordion-content\')]',
    type: 'xpath',
  },
  'Jobs': {
    selector: `//*[@id='listing']//*[contains(@class,'lister__item')]`,
    type:'xpath',
  },
  'Header': {
    selector: './/*[@class=\'lister__header\']',
    type: 'xpath',
  },
  'Location': {
    selector: './/*[contains(@class, \'location\')]',
    type:'xpath',
  },
  'Location 1': {
    selector: '//*[@id=\'listing\']//*[contains(@class,\'lister__item\')][1]//*[contains(@class, \'location\')]',
    type:'xpath',
  },
  'Salary': {
    selector: './/*[contains(@class,\'salary\')]',
    type:'xpath',
  },
  'Recruiter': {
    selector: './/*[contains(@class,\'recruiter\')]',
    type:'xpath',
  },
  'View details': {
    selector: '//*[contains(@class,\'lister__item\')][%1$s]//*[@class=\'lister__view-details\']',
    type:'xpath',
  },
  'Jobs page': {
    selector: 'search',
    type:'id',
  },
  'Search results title': {
    selector: 'searching',
    type:'id',
  },
  'Search Location': {
    selector: '//*[@id =\'location\']',
    type:'xpath',
  },
  'Search Location Distance': {
    selector: '//*[@id =\'RadialLocation\']//*[@selected=\'selected\']',
    type:'xpath',
  },
  'Health': {
    selector: pageModule('Health'),
    type: 'xpath',
  },
  'Banking and finance': {
    selector: pageModule('Banking and finance'),
    type: 'xpath',
  },
};