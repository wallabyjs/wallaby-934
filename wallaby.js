const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {

  webpackConfig.resolve.extensions = ['', '.js', '.vue'];
  webpackConfig.ts.compilerOptions = {
    baseUrl: wallaby.localProjectDir,
    paths: {'*': ['./node_modules/*']}
  };
  const wallabyPostprocessor = wallabyWebpack(webpackConfig);

  return {
    files: [
      {pattern: 'tsconfig.json', load: false},
      {pattern: 'src/**/*.*', load: false}
    ],

    tests: [
      {pattern: 'test/**/*.spec.ts', load: false}
    ],

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};
