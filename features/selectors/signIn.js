const { signInCreateAccountFormTemplate } = require('./templates');

module.exports = {
  'Sign In Form': {
    xpath: signInCreateAccountFormTemplate('Sign in'),
  },
  'Create Account Form': {
    xpath: signInCreateAccountFormTemplate('Create an account'),
  },
};
