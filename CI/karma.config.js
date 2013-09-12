basePath = '..';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'src/**/*.js',
    'spec/**/*Spec.js'
];

reporters = ['dots'];

port = 9876;

runnerPort = 9100;

colors = true;

logLevel = LOG_INFO;

autoWatch = false;

browsers = ['PhantomJS'];

captureTimeout = 60000;

singleRun = true;
