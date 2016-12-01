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
            var leftOffset = 5
            var leftBarX1 = leftOffset
            var leftBarX2 = 5 + (thisComponent.value * (chartWidth - 10) / 100)
            var rightBarX1 = leftBarX2
            var rightBarX2 = chartWidth - 5
            var bothBarsY = chartHeight / 2

            var chartSvg = '<svg class="ct-chart-bar ct-horizontal-bars" height="100%" width="100%">' +
                '<g class="ct-series ct-series-b"> <line class="ct-bar" style="stroke: #1D384B;" x1="' + rightBarX1 + '" x2="' + rightBarX2 + '" y1="' + bothBarsY + '" y2="' + bothBarsY + '"></line>' +
                '<g class="ct-series ct-series-a"> <line class="ct-bar" style="stroke: #8AB4D4;" x1="' + leftBarX1 + '" x2="' + leftBarX2 + '" y1="' + bothBarsY + '" y2="' + bothBarsY + '"></line>' +
                '</svg>'
            $(chartSelector).html(chartSvg)
        }

        renderChart()
        $(window).resize(function () {
            renderChart()
        })
    }
}