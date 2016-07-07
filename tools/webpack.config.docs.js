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
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.ttf$|\.woff$|\.svg$|\.ico$|\.html$/,
      loader: 'file',
      query: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  config.debug = true;
  config.devtool = 'source-map';
}

module.exports = config;
