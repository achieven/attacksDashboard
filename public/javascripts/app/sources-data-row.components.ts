import {Input, Component} from 'angular2/core';

@Component({
    selector: 'sources-data-row',
    templateUrl: 'templates/sources-data-row.html'
})

export class SourcesDataRowComponent {
    header:string = '';
    value:string = '';
    chartId:string = '';


    @Input() set _data(_data:any) {
        var headerSeperatedBycapitalLetters = _data.header;
        this.header = headerSeperatedBycapitalLetters
        this.chartId = 'bar' + _data.outerRowNumber + '_' + _data.rowNumber;
        this.value = _data.value;
    }

    ngAfterViewInit() {
        var thisComponent = this
        var chartSelector = '#' + this.chartId

        function renderChart() {
            var chartWidth = $(chartSelector).width(), chartHeight = $(chartSelector).height()
            var roundingBarOffset = 3
            var leftBarX1 = roundingBarOffset
            var leftBarX2 = roundingBarOffset + (thisComponent.value * (chartWidth - (roundingBarOffset * 2)) / 100)
            var rightBarX1 = leftBarX2
            var rightBarX2 = chartWidth - roundingBarOffset
            var bothBarsY = chartHeight / 2
            var brightStroke = '#1D384B', darkStroke = '#8AB4D4'  

            var chartSvg = '<svg class="ct-chart-bar ct-horizontal-bars" height="100%" width="100%">' +
                '<g class="ct-series ct-series-b"> <line class="ct-bar" style="stroke: ' + brightStroke + '; stroke-width: 5px;" x1="' + rightBarX1 + '" x2="' + rightBarX2 + '" y1="' + bothBarsY + '" y2="' + bothBarsY + '"></line>' +
                '<g class="ct-series ct-series-a"> <line class="ct-bar" style="stroke: ' + darkStroke + '; stroke-width: 5px" x1="' + leftBarX1 + '" x2="' + leftBarX2 + '" y1="' + bothBarsY + '" y2="' + bothBarsY + '"></line>' +
                '</svg>'
            $(chartSelector).html(chartSvg)
        }

        renderChart()
        $(window).resize(function () {
            renderChart()
        })
    }
}