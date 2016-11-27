import {Input, Component} from 'angular2/core';
import {SourcesDataRowComponent} from './sources-data-row.components.js'

@Component({
    selector: 'sources-data',
    templateUrl: 'templates/sources-data.html',
    directives: [SourcesDataRowComponent]
})

export class SourcesDataComponent {
    data: Array<Object> = [];

    @Input() set _data(_data:any) {
        if(_data){
            var rowNumber = 1;

            var normalizeValues = function(object, sumAllValues){
                if(sumAllValues === 99){
                    object.length > 0 && object[0].value++
                }
                else if(sumAllValues === 101){
                    object.length > 0 && object[0].value--
                }
                return object;
            }
            var sumAllValues = 0
            for(var key in _data){
                if(key != 'header' && key != 'outerRowNumber'){
                    sumAllValues += Math.round(_data[key])
                    this.data.push({header: key, value: Math.round(_data[key]), rowNumber: rowNumber, outerRowNumber: _data.outerRowNumber})
                    rowNumber++;
                }
            }
            this.data = normalizeValues(this.data, sumAllValues)

            
        }
    }
}