var path = require('path');

module.exports = function(config) {
  config.set({
    // use the PhantomJS browser
    browsers: ['PhantomJS'],

    // karma-reporter configuration
    coverageReporter: {
      // output coverage results to the coverage folder in the project's root
      dir: 'coverage',
      subdir: '.',
      // output coverage results as html
      type: 'html'
    },

    // files that Karma will server to the browser
    files: [
      // use Babel polyfill to emulate a full ES6 environment in the PhantomJS browser
      'node_modules/babel-polyfill/dist/polyfill.js',
      // entry file for webpack
      'test/spec_helper.js'
    ],

    // use the Jasmine testing framework
    frameworks: ['jasmine'],

    // before serving test/spec_helper.js to the browser
    preprocessors: {
      'test/spec_helper.js': [
        // use karma-webpack to preprocess the file via webpack
        'webpack',
        // use karma-sourcemap-loader to utilize sourcemaps generated by webpack
        'sourcemap'
      ]
    },

    // test reporters that Karma should use
    reporters: [
      // use karma-spec-reporter to report results to the browser's console
      'spec',
      // use karma-coverage to report test coverage
      'coverage'
    ],

    // karma-spec-reporter configuration
    specReporter: {
      // remove meaningless stack trace when tests do not pass
      maxLogLines: 1,
      // do not print information about tests that are passing
      suppressPassed: true
    },

    // webpack configuration used by karma-webpack
    webpack: {
      // generate sourcemaps
      devtool: 'eval-source-map',
      module: {
        loaders: [
          // use babel-loader to transpile the src and test folders
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          // use isparta-loader to measure code coverage in the src folder
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|test)/,
            loader: 'isparta'
          }
        ]
      },
      // importing modules via a relative path starts out at the src folder
      // i.e. from a test/testFile.js you can import the App component through
      // `import App from 'components/App';` instead of `import App from '../src/components/App';`
      resolve: {
        root: path.resolve('./src')
      }
    },
    webpackMiddleware: {
      // do not output webpack build information to the browser's console
      noInfo: true
    }
  })
}
