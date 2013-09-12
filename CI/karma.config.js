  module.exports = function(config) {
    config.set({
      basePath: '.',
      frameworks: ['jasmine'],
      files: [
      'spec/ThisSpec.js',
      'spec/ObjectsSpec.js',
      'spec/PrototypeSpec.js',
      'spec/TypeOfSpec.js'
      'spec/InstanceOfSpec.js'
      'spec/ConstructorSpec.js'
      'spec/ConstructorValidationSpec.js'
      'spec/CustomMatchersSpec.js'
      ],
      reporters: ['dots'],
      port: 9876,
      colors: false,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      // browsers: ['PhantomJS'],
      captureTimeout: 60000,
      // singleRun: true
    });
  };