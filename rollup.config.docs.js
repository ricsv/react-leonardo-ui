/* eslint-env node */

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import sourcemaps from 'rollup-plugin-sourcemaps';

import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';


function copyFileSync(src, dest) {
  const srcFile = path.resolve(__dirname, src);
  const destFile = path.resolve(__dirname, dest);

  const content = fs.readFileSync(srcFile);
  if (fs.existsSync(destFile)) {
    const toContent = fs.readFileSync(destFile).toString();
    if (toContent === content.toString()) {
      // file content never changed, do nothing:
      return;
    }
  }
  fs.writeFileSync(destFile, content);
}

// Rollup plugin to copy static files
function copy() {
  return {
    name: 'docs-copy',
    writeBundle() {
      copyFileSync('docs/src/docs.css', 'docs/dist/docs.css');
      copyFileSync('docs/src/favicon.ico', 'docs/dist/favicon.ico');
      copyFileSync('docs/src/react-logo.svg', 'docs/dist/react-logo.svg');
      copyFileSync('node_modules/leonardo-ui/dist/leonardo-ui.css', 'docs/dist/leonardo-ui.css');
      copyFileSync('node_modules/leonardo-ui/dist/lui-icons.woff', 'docs/dist/lui-icons.woff');
      copyFileSync('node_modules/leonardo-ui/dist/lui-icons.ttf', 'docs/dist/lui-icons.ttf');
    },
  };
}

// Rollup plugin to server-side render index.html
function ssr() {
  return {
    name: 'docs-ssr',
    writeBundle() {
      const Docs = require('./docs/dist/docs'); // eslint-disable-line

      const str = renderToString(React.createElement(Docs));

      const htmlContent = fs.readFileSync(path.resolve(__dirname, './docs/src/index.html'), 'utf8');
      const ssrHtmlContent = htmlContent.replace(/\s*?<!--Content-->/, str);
      fs.writeFileSync(path.resolve(__dirname, './docs/dist/index.html'), ssrHtmlContent, 'utf8');
    },
  };
}

const config = {
  input: 'docs/src/docs.js',
  output: {
    file: 'docs/dist/docs.js',
    format: 'umd',
    name: 'docsContainer',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: [
    'react',
    'react-dom',
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      modulesOnly: true,
    }),
    copy(),
    ssr(),
  ],
};

if (process.env.BUILD !== 'production') {
  config.plugins.push(serve({
    verbose: true,
    contentBase: [
      'docs/dist',
      'docs/static',
      'node_modules/leonardo-ui/dist',
    ],
    host: 'localhost',
    port: 8080,
  }));
  config.plugins.push(sourcemaps());
}

export default config;
