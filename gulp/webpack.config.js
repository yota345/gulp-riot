var webpack = require("webpack");
var config  = require('./config');


module.exports = {
  entry: './' + config.srcPath + '/scripts/index.js',
  output: {
    appPath: config.javascript.dest,
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riotjs-loader',
        query: { type: 'none' }
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
  }
};
