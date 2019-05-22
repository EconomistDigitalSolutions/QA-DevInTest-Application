module.exports = {
  'Sign in block': {
    selector: '//h1[contains(text(),\'Sign in\')]/parent::*',
    type: 'xpath',
  },
  'Sign in Password': {
    selector: 'signinpassword',
    type: 'id',
  },
  'Sign in Email address': {
    selector: 'signinemail',
    type: 'id',
  },
  'Forgotten password': {
    selector: `//*[contains(@class,'grid-item')]//*[contains(text(),'Forgotten password')]`,
    type: 'xpath',
  },
  'Keep me signed in': {
    selector: 'rememberme',
    type: 'id',
  },
  'Sign in button': {
    selector: `//*[@value='Sign in']`,
    type: 'xpath',
  },
};