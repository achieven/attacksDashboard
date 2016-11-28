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
            $('sources-data').html('<div class="attacks-dashboard-text"> Sorry!<br><br> This feature is currenlt not supported in Firefox.<br><br> Please use Chrome / Safari instead</div> <div class="attacks-dashboard-text" style="font-size: 50px">&#9786</div>')
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