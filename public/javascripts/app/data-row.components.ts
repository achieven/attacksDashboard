import {Input, Component} from 'angular2/core';
import {WebHeaderComponent} from './web-header.components.js'
import {TypesDataComponent} from './types-data.components.js'
import {SeveritiesDataComponent} from './severities-data.components.js'
import {SourcesDataComponent} from './sources-data.components.js'

@Component({
    selector: 'data-row',
    templateUrl: 'templates/data-row.html',
    directives: [WebHeaderComponent, TypesDataComponent, SeveritiesDataComponent, SourcesDataComponent]
})

export class DataRowComponent {
    @Input() header = '';
}