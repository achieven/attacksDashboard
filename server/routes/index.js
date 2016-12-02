const express = require('express');
const router = express.Router();
const path = require('path');
const util = require('../util/util.js')
const fs = require('fs')


router.get('/', function (req, res, next) {
    var html = fs.readFileSync('views/index.html', 'utf8')
    var authorized = util.getToken(req.cookies)
    if (authorized) {
        res.send(html)
    }
    else {
        util.storeToken(function (token) {
            res.setHeader('Set-Cookie', 'auth_token=' + token);
            res.send(html)
        })
    }
});

router.get('/getdata', function (req, res) {
    var authorized = util.getToken(req.cookies)
    if (authorized) {
        var data = util.parseJson()
        res.send(data)
    }
    else {
        res.status(403).send('You are not authorized to see this')
    }
})

module.exports = router;