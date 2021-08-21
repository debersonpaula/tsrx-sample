'use strict';

const { DefaultConfig } = require('tsrx/tools');

module.exports = DefaultConfig({
  port: 8080,
  publicFolder: 'public',
  configFile: 'config.ts',
  env: {
    API_URL: 'https://reqres.in',
  },
  jest: {
    coverageThreshold: JSON.stringify({
      global: {
        branches: 5,
        functions: 40,
        lines: 50,
        statements: 50,
      },
    }),
    verbose: true,
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/bootstrap.tsx',
      '!src/index.ts',
      '!src/test/**/*',
    ],
  },
  devServer: {
    open: true,
  },
});
