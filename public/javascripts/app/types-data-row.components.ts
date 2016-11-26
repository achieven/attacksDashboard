import {Input, Component} from 'angular2/core';
import {TypesDataElementComponent} from './types-data-element.components.js'

@Component({
    selector: 'types-data-row',
    templateUrl: 'templates/types-data-row.html',
    directives: [TypesDataElementComponent]
})

export class TypesDataRowComponent {
    firstElement: Object = {};
    secondElement: Object = {};

    @Input() set _data(_data:any) {
        if(_data){
            this.firstElement = _data[0];
            this.secondElement = _data[1];
        }
    }
}