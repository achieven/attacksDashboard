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
        var userAgent = navigator.userAgent
        var isFirefoxBrowser = userAgent.indexOf('Firefox') > -1;
        if (isFirefoxBrowser) {
            $('.sources-data').attr('style', 'display:none')
        }
        else {
            var isIeBrowser = (userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1) || userAgent.indexOf('MSIE') > -1
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
                        var newStyle = 'stroke-width: 12px;'
                        var isSeriesA = data.element._node.parentElement.className.baseVal.indexOf('ct-series-a') > 0;
                        var isSeriesB = data.element._node.parentElement.className.baseVal.indexOf('ct-series-b') > 0;
                        var blueStroke = '#8AB4D4', blackStroke = '#1D384B'
                        if (isSeriesA) {
                            newStyle += 'stroke: ' + blueStroke
                        }
                        else if (isSeriesB) {
                            newStyle += 'stroke: ' + blackStroke
                        }
                        data.element.attr({
                            style: newStyle
                        })
                    }
                    if (data.type === 'label') {
                        data.element.attr({
                            style: 'display: none;'
                        })

                    }
                })
            }
        }
    }
}