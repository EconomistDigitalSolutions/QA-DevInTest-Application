const { blockLocatorTemplate } = require('./templates');

module.exports = {
  'Sign In Form': {
    xpath: blockLocatorTemplate('Sign in'),
  },
  'Create Account Form': {
    xpath: blockLocatorTemplate('Create an account'),
  },
};
