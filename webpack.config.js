/**
 * Webpack bundle config
 */

module.exports = {

  entry: './public/js/app.js',

  output: {
    path: './public/js', 
    publicPath: 'http://mycdn.com/', 
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, 
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' } 
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json', '.jsx'] 
  }

};