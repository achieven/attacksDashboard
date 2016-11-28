var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/templates', express.static(__dirname + '/views/templates/'))
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/css', express.static(__dirname + '/public/stylesheets/'))
app.use('/images', express.static(__dirname + '/public/images/'))
app.use('assets', express.static(__dirname + '/public/assets/'))
app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;