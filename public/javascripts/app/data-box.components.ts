import {Input, Component} from 'angular2/core';
import {TypesDataComponent} from './types-data.components.js'
import {SeveritiesDataComponent} from './severities-data.components.js'
import {SourcesDataComponent} from './sources-data.components.js'

@Component({
    selector: 'data-box',
    templateUrl: 'templates/data-box.html',
    directives: [TypesDataComponent, SeveritiesDataComponent, SourcesDataComponent]
})

export class DataBoxComponent {
    header: string = '';
    data: Object = {};

    @Input() set _data(_data:any) {
        if (_data) {
            //
            this.header = _data.header
            this.data = _data;
        }
    }
}