'use strict';

var DefaultConfig = require('tsrx/tools').DefaultConfig;

module.exports = DefaultConfig({
  source: 'src',
  outputPath: 'dist',
  port: 8080,
  host: 'localhost',
  nodeEnv: {
    API_URL: 'https://reqres.in'
  },
  htmlEnv: {
  },
  reactHotLoader: true,
  jest: {
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
    updateSnapshot: true,
  },
  devServer: {
    open: true
  }
});
