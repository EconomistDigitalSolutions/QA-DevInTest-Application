module.exports = {
  'Job header':{
    selector : '//*[contains(@class,\'lap-one-whole\')]//h1',
    type : 'xpath',
  },
  'Job location': {
    selector : '//*[contains(@class,\'description__location\')]//*[contains(@class, \'three-fifths\')]',
    type: 'xpath',
  },
  'Job salary' : {
    selector: '//*[contains(@class,\'description__salary\')]//*[contains(@class, \'three-fifths\')]',
    type: 'xpath',
  },
  'Job recruiter' : {
    selector: '//*[contains(@class,\'description__recruiter\')]//*[contains(@class, \'three-fifths\')]',
    type: 'xpath',
  },
  'Job Sector' : {
    selector: '//*[contains(@class,\'Sector\')]//*[contains(@class,\'three-fifths\')]',
    type: 'xpath',
  },
  'Job Description' : {
    selector: '//*[contains(@class,\'job-description\')]',
    type: 'xpath',
  },
  'Apply button' : {
    selector: '//*[contains(@class,\'job-actions\')]//*[contains(@class,\'button--apply\')]',
    type: 'xpath',
  },
};