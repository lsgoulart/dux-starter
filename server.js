/* eslint no-console: 0 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.dev');

var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : process.env.PORT;

var app = express();
var api = require('./api')(app);

app.use(cors());
app.use('/public', express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if(isDeveloping) {
  var compiler = webpack(config);
  var middleware = webpackMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
} else {
  app.use(express.static(__dirname, '/dist'));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) return console.log(err);
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
