var webpack = require('webpack');

var config = {
  entry: {
    site: './src/site.js',
    detail: './src/pages/detail.js',
    search: './src/pages/search.js'
  },
  output: {
    path: './build',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'site', minChunks: 2 })
  ],
  resolve: {
    alias: {
      'react': 'react/addons'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx?harmony' }
    ]
  }
};

module.exports = config;
