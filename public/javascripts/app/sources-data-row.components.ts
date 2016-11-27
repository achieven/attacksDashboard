import {Input, Component} from 'angular2/core';

@Component({
    selector: 'sources-data-row',
    templateUrl: 'templates/sources-data-row.html'
})

export class SourcesDataRowComponent {
    header:string = '';
    value:number = 0;
    chartId:string = '';


    @Input() set _data(_data:any) {
        var headerSeperatedBycapitalLetters = _data.header.match(/[A-Z][a-z]+/g).join(' ');
        this.header = headerSeperatedBycapitalLetters
        this.value = _data.value;
        this.chartId = 'bar' + _data.outerRowNumber + '_' + _data.rowNumber;
    }

    ngAfterViewInit() {
        var chartSelector = '#' + this.chartId

        new Chartist.Bar(chartSelector, {
            series: [[this.value], [100 - this.value]]
        }, {
            stackBars: true,
            horizontalBars: true,
            axisY: {
                offset: 0
            }
        }).on('draw', function (data) {
            if (data.type === 'bar') {
                var newStroke = 'stroke-width: 16px;'
                var isSeriesA = data.element._node.parentElement.className.baseVal.indexOf('ct-series-a') > 0;
                var isSeriesB = data.element._node.parentElement.className.baseVal.indexOf('ct-series-b') > 0
                if (isSeriesA) {
                    newStroke += 'stroke: #8AB4D4'
                }
                else if (isSeriesB) {
                    newStroke += 'stroke: #1D384B'
                }
                data.element.attr({
                    style: newStroke
                })
            }
        })
    }
}