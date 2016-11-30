import {Injectable} from "angular2/core";
@Injectable()
export class Util {
    static isIeBrowser(callback) {
        var userAgent = navigator.userAgent
        if ((userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1) || userAgent.indexOf('MSIE') > -1) {
            return true
        }
    }

    static isPositiveNumber(value) {
        return typeof value != 'symbol' && !isNaN(parseFloat(value)) && isFinite(value) && parseFloat(value) >= 0
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
            if (key != 'header' && key != 'outerRowNumber' && this.isPositiveNumber(data[key])) {
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
        console.log(newData)
        //
        // if (sumAllValues < 100) {
        //     var diff = 100 - sumAllValues
        //     var counter = 0
        //     newData.sort(function (a, b) {
        //         return a.oldValue - b.oldValue
        //     })
        //     newData.some(function (source) {
        //         if(source.value === 0){
        //             source.value++
        //             counter++
        //         }
        //       
        //     })
        //     if(counter > diff) {
        //         newData.reverse()
        //         newData.some(function (source) {
        //             if (counter === diff) {
        //                 return true
        //             }
        //             source.value--
        //             counter--
        //         })
        //     }
        //     else if(counter < diff){
        //         newData.reverse()
        //         newData.some(function (source) {
        //             if (counter === diff) {
        //                 return true
        //             }
        //             source.value++
        //             counter++
        //         })
        //     }
        //     newData.sort(function (a, b) {
        //         return a.rowNumber - b.rowNumber
        //     })
        // }
        return newData;
    }
}