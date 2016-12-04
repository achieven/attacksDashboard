var express = require('express');
var path = require('path');
var routes = require('./server/routes/index');
const cookieParser = require('cookie-parser')
var app = express();

const port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('listening on port ' + port)
})

app.use(express.static(path.join(__dirname, 'client')));
app.use('/templates', express.static(__dirname + '/client/templates/'))
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/css', express.static(__dirname + '/client/stylesheets/'))
app.use('/images', express.static(__dirname + '/client/assets/images/'))
app.use('/fonts', express.static(__dirname + '/client/assets/fonts/'))
app.use(cookieParser())
app.use('/', routes);


module.exports = app;