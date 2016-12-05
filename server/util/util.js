const fs = require('fs')
const crypto = require('crypto')
const sha256 = require('js-sha256').sha256

var Util = {
    parseJson: function(){
        var json = fs.readFileSync('./server/assets/data.json', 'utf8')
        return json
    }
}

module.exports = Util