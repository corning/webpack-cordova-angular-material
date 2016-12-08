// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine'
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'progress',

      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],

    files: [
      // Grab all files in the app folder that contain .spec.
      'test.config.js'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'test.config.js': ['webpack', 'sourcemap']
    },

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    port: 9876,

    captureTimeout: 60000,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },

    logLevel: config.LOG_INFO,

    webpack:{
      entry:{},
      output:{},
      plugins:[],
      devtool:'inline-source-map',
      module:{
        preLoaders: [{
          test: /\.js$/,
          exclude: [
            /node_modules/,
            /\.spec\.js$/
          ],
          loader: 'isparta-loader'
        }],
        loaders: [{
          // JS LOADER
          // Reference: https://github.com/babel/babel-loader
          // Transpile .js files using babel-loader
          // Compiles ES6 and ES7 into ES5 code
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        }, {
          // CSS LOADER
          // Reference: https://github.com/webpack/css-loader
          // Allow loading css through js
          //
          // Reference: https://github.com/postcss/postcss-loader
          // Postprocess your css with PostCSS plugins
          test: /\.(css|less)$/,
          // Reference: https://github.com/webpack/extract-text-webpack-plugin
          // Extract css files in production builds
          //
          // Reference: https://github.com/webpack/style-loader
          // Use style-loader in development.
          loader:'null'
        }, {
          // ASSET LOADER
          // Reference: https://github.com/webpack/file-loader
          // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
          // Rename the file using the asset hash
          // Pass along the updated reference to your code
          // You can add here any file extension you want to get copied to your output
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          loader: 'file'
        }, {
          // HTML LOADER
          // Reference: https://github.com/webpack/raw-loader
          // Allow loading html through js
          test: /\.htm(l)?$/,
          loader: 'raw'
        }]
      }
    },
    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  });
};