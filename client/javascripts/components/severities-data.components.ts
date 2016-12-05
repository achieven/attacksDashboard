import {Input, Component} from 'angular2/core';
import {SeveritiesDataChartComponent} from './severities-data-chart.components.js'
import {SeveritiesDataRowComponent} from './severities-data-row.components.js'

@Component({
    selector: 'severities-data',
    templateUrl: 'templates/severities-data.html',
    directives: [SeveritiesDataChartComponent, SeveritiesDataRowComponent]
})

export class SeveritiesDataComponent {
    data: Object = {}

    @Input() set _data(_data:any) {
        this.data = _data;
    }
}