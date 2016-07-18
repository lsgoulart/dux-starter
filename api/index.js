var posts = require('./posts');

var api = function(app){
  posts(app);
} 

module.exports = api;