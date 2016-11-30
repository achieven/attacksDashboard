const express = require('express');
const router = express.Router();
const path = require('path');
const util = require('../server/util/util.js')


router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/getdata', function(req, res){
  var data = util.parseJson()
  res.send(data)
})

module.exports = router;