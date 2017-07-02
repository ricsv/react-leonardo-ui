/* eslint-env node */

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import sourcemaps from 'rollup-plugin-sourcemaps';

import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';

function ssr() {
  return {
    name: 'docs-ssr',
    onwrite() {
      const Docs = require('./docs/dist/docs'); // eslint-disable-line

      const str = renderToString(React.createElement(Docs));

      const htmlContent = fs.readFileSync(path.resolve(__dirname, './docs/src/index.html'), 'utf8');
      const ssrHtmlContent = htmlContent.replace(/\s*?<!--Content-->/, str);
      fs.writeFileSync(path.resolve(__dirname, './docs/dist/index.html'), ssrHtmlContent, 'utf8');
    }
  };
}

const config = {
  entry: 'docs/src/docs.js',
  dest: 'docs/dist/docs.js',
  moduleName: 'docsContainer',
  format: 'umd',
  external: [
    'react',
    'react-dom'
  ],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      modulesOnly: true
    }),
    ssr()
  ]
};

if (process.env.BUILD !== 'production') {
  config.plugins.push(serve({
    verbose: true,
    contentBase: [
      'docs/dist',
      'docs/static',
      'node_modules/leonardo-ui/dist'
    ],
    host: 'localhost',
    port: 8080
  }));
  config.plugins.push(sourcemaps());
}

export default config;
