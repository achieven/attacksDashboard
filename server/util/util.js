const fs = require('fs')
const crypto = require('crypto')
const sha256 = require('js-sha256').sha256

var Util = {
    parseJson: function(){
        var json = fs.readFileSync('./server/assets/data.json', 'utf8')
        return json
    },
    storeToken: function(callback){
        if(!this.tokenList){
            this.tokenList = []
        }
        var self = this
        crypto.randomBytes(48, function (err, buffer) {
            var token = buffer.toString('hex');
            self.tokenList[sha256(token)] = true
            callback(token)
        })
    },
    getToken: function(cookies){
        var tokenList = this.tokenList, token = cookies.auth_token
        if(tokenList && token && tokenList[sha256(token)]){
            return true
        }
    }
}

module.exports = Util