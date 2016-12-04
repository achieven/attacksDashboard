import {Input, Component} from 'angular2/core';
import {SeveritiesDataElementComponent} from './severities-data-element.components.js'

@Component({
    selector: 'severities-data-row',
    templateUrl: 'templates/severities-data-row.html',
    directives: [SeveritiesDataElementComponent]
})

export class SeveritiesDataRowComponent {
    highElement: Object = {}
    mediumElement: Object = {}
    lowElement: Object = {}

    @Input() set _data(_data:any) {
        if(_data){
            this.highElement = {header: 'HIGH', value: _data.High}
            this.mediumElement = {header: 'MEDIUM', value: _data.Medium}
            this.lowElement = {header: 'LOW', value: _data.Low}
        }
    }
}