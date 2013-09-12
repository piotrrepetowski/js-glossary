module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'spec/**/*Spec.js'
    ],
    reporters: ['dots'],
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    captureTimeout: 60000
  });
};
