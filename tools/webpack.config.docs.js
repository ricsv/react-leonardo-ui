const path = require('path');
const webpack = require('webpack');

const srcDir = path.resolve(__dirname, '../docs/src');
const distDir = path.resolve(__dirname, '../docs/dist');

const config = {
  entry: {
    docs: [path.resolve(srcDir, 'docs')],
    'docs-ssr': path.resolve(srcDir, 'docs-ssr')
  },
  output: {
    path: distDir,
    filename: '[name].js',
    library: 'react-leonardo-ui-docs',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.ttf$|\.woff$|\.svg$|\.ico$|\.html$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          name: '[name].[ext]'
        }
      }]
    }]
  },
  plugins: []
};

if (process.env.PRODUCTION) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  config.devtool = 'source-map';
}

module.exports = config;
