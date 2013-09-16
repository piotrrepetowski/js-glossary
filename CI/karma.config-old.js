basePath = '..';
files = [
	JASMINE,
	JASMINE_ADAPTER,
	'lib/jasmine-1.3.1/jasmine-addons.js',
    'src/**/*.js',
    'spec/**/*Spec.js'
];
reporters = ['dots'];
port = 9876;
runnerPort = 9100;
colors = true;
logLevel = LOG_INFO;
autoWatch = true;
browsers = ['Firefox'];
captureTimeout = 60000;
singleRun = false;