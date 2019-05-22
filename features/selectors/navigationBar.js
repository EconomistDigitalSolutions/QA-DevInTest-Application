const { navigationLocator,
  navigationPageLocator } = require('./templates');
module.exports = {
  'Home Link': {
    selector: navigationLocator('home'),
    type: 'xpath',
  },
  'Home Page': {
    selector: 'header',
    type: 'className',
  },
  'Find a job Link': {
    selector: navigationLocator('find-a-job'),
    type: 'xpath',
  },
  'Jobs Page': {
    selector: `//*[@class='main']//*[contains(text(),'Found') and contains(text(),'job')]`,
    type: 'xpath',
  },
  'Job alerts Link': {
    selector: navigationLocator('jbe'),
    type: 'xpath',
  },
  'New alert Page': {
    selector: navigationPageLocator('Create a job alert'),
    type: 'xpath',
  },
  'Search recruiters Link': {
    selector: navigationLocator('recruiters'),
    type: 'xpath',
  },
  'Search recruiters Page': {
    selector: navigationPageLocator('Search recruiters'),
    type: 'xpath',
  },
  'Jobs blog Link': {
    selector: navigationLocator('advice'),
    type: 'xpath',
  },
  'Jobs blog Page': {
    selector: navigationPageLocator('Jobs blog'),
    type: 'xpath',
  },
};