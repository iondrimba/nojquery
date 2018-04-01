module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'fixture'],
    files: [
      './spec/fixtures/index.html',
      './spec/vendors/jquery.js',
      './spec/nojquerySpec.js',
      './nojquery.js'
    ],
    included: false,
    coverageReporter: {
      dir: 'coverage',
      reporters: [{
        type: 'lcov',
        subdir: '/',
      },
      ],
    },
    preprocessors: {
      './nojquery.js': ['coverage'],
      'spec/**/*.html': ['html2js']
    },
    reporters: ['spec', 'coverage', 'threshold'],
    thresholdReporter: {
      statements: 80,
      branches: 50,
      functions: 85,
      lines: 90
    },
    plugins: [
      'karma-fixture',
      'karma-html2js-preprocessor',
      'karma-chrome-launcher',
      'istanbul-instrumenter-loader',
      'karma-jasmine',
      'karma-coverage',
      'karma-threshold-reporter',
      'karma-spec-reporter'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222'
        ]
      }
    },
    singleRun: true,
    concurrency: Infinity
  })
}
