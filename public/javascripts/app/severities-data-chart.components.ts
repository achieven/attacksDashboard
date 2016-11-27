import {Input, Component} from 'angular2/core';

@Component({
    selector: 'severities-data-chart',
    templateUrl: 'templates/severities-data-chart.html'
})

export class SeveritiesDataChartComponent {
    chartId:string = '';
    data:Object = {};

    @Input() set _data(_data:any) {
        if (_data) {
            this.chartId = 'chart' + _data.outerRowNumber
            this.data = _data;
        }
    }

    ngAfterViewInit() {
        var chartSelector = '#' + this.chartId
        new Chartist.Pie(chartSelector, {
            series: [this.data.High, this.data.Medium, this.data.Low]
        }, {
            donut: true,
            donutWidth: '15%',
            showLabel: false
        });

    }
}