const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: './src/index.js',
  target: 'web',
  devtool: false,
  mode: 'development',
  output: {
    filename: 'host.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remote: 'remote@http://localhost:9001/remoteEntry.js',
      },
      // comment this to prevent an error
      shared: ['axios']
    })
  ],
  devServer: {
    compress: true,
    port: 9000,
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
