import {Injectable} from "angular2/core";
@Injectable()
export class Util {
    static initBrowserName(){
        this.browserName = new UAParser().getBrowser().name
    }
    
    static isExplorer() {
        if (this.browserName === 'IE'){
            return true
        }
    }
    static isEdge(){
        if (this.browserName === 'Edge'){
            return true
        }
    }
    static isFirefox(){
        if (this.browserName === 'Firefox'){
            return true
        }
    }

    static seperateToCapitalLetters(str){
        var capitalLetterRegex = /([A-Z]?[^A-Z]*)/g
        return str.match(capitalLetterRegex).slice(0,-1).join(' ').toUpperCase()
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