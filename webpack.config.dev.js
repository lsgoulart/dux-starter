var path              = require('path');
var webpack           = require('webpack');
var autoprefixer      = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    // path: '/static/'
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      // JS
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'client']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  postcss: function () {
      return {
          defaults: [
            require('precss'),
            require('autoprefixer'),
            /* reset inherited rules */
            require('postcss-initial')({
              reset: 'inherited' // reset only inherited rules
            }),
            /* enable css @imports like Sass/Less */
            require('postcss-import'),

            /* enable mixins like Sass/Less */
            require('postcss-mixins'),

            /* enable nested css selectors like Sass/Less */
            require('postcss-nested'),

            /* require global variables */
            require('postcss-simple-vars'),
          ],
          cleaner:  [autoprefixer({ browsers: [] })]
      };
  }
};
