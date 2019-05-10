const { headerTitle } = require('./templates');

module.exports = {
  'Jobs blog title': {
    xpath: headerTitle('Jobs blog'),
  },
  'Articles list': {
    className: 'cf block lister',
  },
};
