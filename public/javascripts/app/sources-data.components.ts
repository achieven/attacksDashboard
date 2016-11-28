import {Input, Component} from 'angular2/core';
import {SourcesDataRowComponent} from './sources-data-row.components.js'
import {Util} from 'util/util.js';

@Component({
    selector: 'sources-data',
    templateUrl: 'templates/sources-data.html',
    directives: [SourcesDataRowComponent]
})

export class SourcesDataComponent {
    data:Array<Object> = [];

    @Input() set _data(_data:any) {
        if (_data) {
            this.data = Util.normalizeValues(_data)
        }
    }
}