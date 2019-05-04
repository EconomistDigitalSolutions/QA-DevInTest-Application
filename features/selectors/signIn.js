const { button, logInForm, checkboxList } = require('./templates');

const form = 'Sign in';
module.exports = {
  'Sign in form': {
    xpath: logInForm(form),
  },
  'Sign in Email': {
    id: 'signinemail',
  },
  'Sign in Password': {
    id: 'signinpassword',
  },
  'Sign in': {
    css: button(form),
  },
  'Forgotten password': {
    linkText: 'Forgotten password?',
  },
  'Sign in checkbox list': {
    xpath: checkboxList(form),
  },
};
