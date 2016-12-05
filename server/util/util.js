const fs = require('fs')

var Util = {
    parseJson: function(){
        var json = fs.readFileSync('./server/assets/data.json', 'utf8')
        return json
    }
}

module.exports = Util