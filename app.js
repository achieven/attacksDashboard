const express = require('express');
const path = require('path');
const routes = require('./server/routes/index');
const app = express();

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
app.use('/', routes);


module.exports = app;