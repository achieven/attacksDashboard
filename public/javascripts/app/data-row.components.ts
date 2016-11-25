import {Input, Component} from 'angular2/core';
import {WebHeaderComponent} from './web-header.components.js'

@Component({
    selector: 'data-row',
    templateUrl: 'templates/data-row.html',
    directives: [WebHeaderComponent]
})

export class DataRowComponent {
    @Input() header = '';
}