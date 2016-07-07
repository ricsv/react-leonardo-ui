const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const docsConfig = require('./webpack.config.docs');

docsConfig.output.publicPath = 'http://localhost:8080/';
docsConfig.entry.docs.unshift('webpack-dev-server/client?http://localhost:8080/');
docsConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack([docsConfig]);
const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, '../docs/dist'),
  quiet: true
});
server.listen(8080);
