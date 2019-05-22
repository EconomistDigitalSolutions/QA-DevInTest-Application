module.exports = {
  'Create an account block': {
    selector: '//*[@id=\'create-account\']/parent::*',
    type: 'xpath',
  },
  'Title': {
    selector: 'title',
    type: 'id',
  },
  'First Name': {
    selector: 'firstname',
    type: 'id',
  },
  'Last Name': {
    selector: 'lastname',
    type: 'id',
  },
  'Email address': {
    selector: 'emailaddress',
    type: 'id',
  },
  'Password': {
    selector: 'regpassword',
    type: 'id',
  },
  'Confirm password': {
    selector: 'confirmpassword',
    type: 'id',
  },
  'Keep me signed in check box': {
    selector: 'rememberme-register',
    type: 'id',
  },
  'Receive emails check box': {
    selector: 'sitemarketing',
    type: 'id',
  },
  'Receive emails as text check box': {
    selector: 'prefertextemails',
    type: 'id',
  },
  'Free Cv review check box': {
    selector: 'SendCvForReview',
    type: 'id',
  },
  'Terms and Conditions check box': {
    selector: 'agreeTermsAndConds',
    type: 'id',
  },
  'Create an account button': {
    selector: '//*[@value=\'Create an account\']',
    type: 'xpath',
  },
  'Card block': {
    selector: 'card block',
    type: 'className',
  },
};