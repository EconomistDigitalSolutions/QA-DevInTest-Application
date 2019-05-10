const { headerTitle } = require('./templates');

module.exports = {
  'Create a job alert': {
    xpath: headerTitle('Create a job alert'),
  },
  'Job alert block title': {
    xpath: '//p[contains(text(),"What type of job are you looking for? Create up to 5 alerts.")]',
  },
  'Job alert form': {
    xpath: '//form',
  },
};
