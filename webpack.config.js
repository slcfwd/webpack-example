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
      { test: /\.jsx?$/, loader: 'jsx?harmony' },
      { test: /\.scss$/, loaders: [
        'style',
        'css',
        'autoprefixer?{browsers:["last 2 version", "> 1%", "ie 8"]}',
        'sass'
      ]}
    ]
  }
};

module.exports = config;
