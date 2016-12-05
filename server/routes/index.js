const express = require('express');
const router = express.Router();
const path = require('path');
const util = require('../util/util.js')
const fs = require('fs')


router.get('/', function (req, res, next) {
    var html = fs.readFileSync('server/index.html', 'utf8')
    res.send(html)
});

router.get('/getdata', function (req, res) {
    var data = util.parseJson()
    res.send(data)
   
})

module.exports = router;