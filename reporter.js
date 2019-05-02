const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'report.json',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
};

reporter.generate(options);
