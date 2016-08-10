var webpack = require("webpack");
var config = require('./config');


module.exports = {
  entry: './' + config.srcPath + '/scripts/index.js',
  output: {
    appPath: config.javascript.dest,
    filename: '[name].bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riotjs-loader',
        query: {
          type: 'babel'
        }
      }
    ],
    loaders: [
      {
        test: /\.js$|\.tag$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
      extensions: ['', '.js', '.tag']
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ]
};
