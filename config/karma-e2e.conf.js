basePath = '../app';

files = [
  'lib/angular-scenario/angular-scenario.js',
  ANGULAR_SCENARIO_ADAPTER,
  '../test/e2e/*Scenario.js'
];

autoWatch = false;
logLevel = LOG_ERROR;

browsers = ['PhantomJS'];
singleRun = true;

captureTimeout = 20000;

proxies = {
  '/': 'http://localhost:9292/'
};

