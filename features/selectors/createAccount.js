const { button, logInForm, checkboxList } = require('./templates');

const form = 'Create an account';
module.exports = {
  'Info Text': {
    className: 'card block',
  },
  'Create an account form': {
    xpath: logInForm(form),
  },
  Title: {
    id: 'title',
  },
  'First name': {
    id: 'firstname',
  },
  'Last name': {
    id: 'lastname',
  },
  'Email address': {
    id: 'emailaddress',
  },
  Password: {
    id: 'regpassword',
  },
  'Confirm password': {
    id: 'confirmpassword',
  },
  'Create an account': {
    css: button(form),
  },
  'Checkbox list': {
    xpath: checkboxList(form),
  },
};
