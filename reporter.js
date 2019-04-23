const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './results/report.cucumber',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
};

reporter.generate(options);
