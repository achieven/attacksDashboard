import {Injectable} from "angular2/core";
@Injectable()
export class Parse {
    static parseJson(callback) {
        $.getJSON('assets/data.json', function(data){
            callback(data);
        })
    }

}