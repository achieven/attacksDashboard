import {Input, Component} from 'angular2/core';
import {Util} from '../util/util.js';

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
        
        var isIeBrowser = Util.isIeBrowser()
        if (!isIeBrowser) {
            var chartSelector = '#' + this.chartId
            new Chartist.Bar(chartSelector, {
                series: [[this.value], [100 - this.value]]
            }, {
                stackBars: true,
                horizontalBars: true,
                showLabel: false,
                axisY: {
                    offset: 0
                },
                chartPadding: {
                    bottom: 15,
                }
            }).on('draw', function (data) {
                if (data.type === 'bar') {
                    var styleBarChart = function(){
                        var newStyle = 'stroke: '
                        var isSeriesA = data.element._node.parentElement.className.baseVal.indexOf('ct-series-a') > 0;
                        var isSeriesB = data.element._node.parentElement.className.baseVal.indexOf('ct-series-b') > 0;
                        const blueStroke = '#8AB4D4', blackStroke = '#1D384B'
                        if (isSeriesA) {
                            newStyle += blueStroke
                        }
                        else if (isSeriesB) {
                            newStyle += blackStroke
                        }
                        data.element.attr({
                            style: newStyle
                        })
                    }
                    styleBarChart()
                }
                if (data.type === 'label') {
                    var removeLabels = function(){
                        data.element.attr({
                            style: 'display: none;'
                        })
                    }
                    removeLabels()
                }
            })
        }
    }
}