const webpack = require('webpack');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');
const distDir = path.resolve(__dirname, '../dist');

const createConfig = (minify) => {
  const config = {
    context: srcDir,
    entry: {
      'react-leonardo-ui': [path.resolve(srcDir, 'react-leonardo-ui')]
    },
    target: 'web',
    output: {
      path: distDir,
      filename: '[name].js',
      libraryTarget: 'umd'
    },
    externals: [
      'react',
      'react-dom'
    ],
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }]
    },
    plugins: []
  };

  if (minify) {
    config.output.filename = '[name].min.js';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      sourceMap: !process.env.PRODUCTION
    }));
  }

  if (!process.env.PRODUCTION) {
    config.devtool = 'source-map';
  }

  return config;
};

module.exports = [
  createConfig(false),
  createConfig(true)
];
