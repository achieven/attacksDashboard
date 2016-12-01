import {Injectable} from "angular2/core";
@Injectable()
export class Util {
    static isIeBrowser() {
        var userAgent = navigator.userAgent
        if ((userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1) || userAgent.indexOf('MSIE') > -1) {
            return true
        }
    }

    static seperateToCapitalLetters(str){
        var capitalLetterRegex = /([A-Z]?[^A-Z]*)/g
        return str.match(capitalLetterRegex).slice(0,-1).join(' ')
    }

    static normalizeValues(data) {
        var rowNumber = 1;
        var sumAllValues = 0
        var newData = []

        for (var key in data) {
            if (key != 'header' && key != 'outerRowNumber') {
                var header = this.seperateToCapitalLetters(key)
                newData.push({
                    header: header,
                    value: Math.round(data[key]),
                    rowNumber: rowNumber,
                    outerRowNumber: data.outerRowNumber
                })
                rowNumber++;
            }
        }
        return newData;
    }
}