/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.config.docs');

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.log(err);
  } else if (stats.hasErrors()) {
    stats.toJson().errors.forEach((error) => {
      console.log(`\n${error}`);
    });
  } else if (stats.hasWarnings()) {
    stats.toJson().warnings.forEach((warn) => {
      console.log(`\n${warn}`);
    });
  } else {
    const renderContainerToString = require('../docs/dist/docs-ssr').default; // eslint-disable-line
    const htmlContent = fs.readFileSync(path.resolve(__dirname, '../docs/dist/index.html'), 'utf8');
    const ssrHtmlContent = htmlContent.replace(/\s*?<!--Content-->/, renderContainerToString());
    fs.writeFileSync(path.resolve(__dirname, '../docs/dist/index.html'), ssrHtmlContent, 'utf8');
  }
});
