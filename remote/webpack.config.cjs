const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {},
  target: 'web',
  devtool: false,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './instance': './src/index.js',
      },
      // comment this to prevent an error
      shared: ['axios']
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 9001,
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
