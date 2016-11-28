import {Injectable} from "angular2/core";
@Injectable()
export class Util {
    static isIeBrowser(callback) {
        var userAgent = navigator.userAgent
        if ((userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1) || userAgent.indexOf('MSIE') > -1) {
            return true
        }
    }

    static normalizeValues(data) {
        var rowNumber = 1;
        var sumAllValues = 0
        var newData = []
        for (var key in data) {
            if (key != 'header' && key != 'outerRowNumber') {
                sumAllValues += Math.round(data[key])
                newData.push({
                    header: key,
                    value: Math.round(data[key]),
                    rowNumber: rowNumber,
                    outerRowNumber: data.outerRowNumber
                })
                rowNumber++;
            }
        }
        if (sumAllValues === 99) {
            newData.length > 0 && newData[0].value++
        }
        else if (sumAllValues === 101) {
            newData.length > 0 && newData[0].value--
        }
        return newData;
    }
}