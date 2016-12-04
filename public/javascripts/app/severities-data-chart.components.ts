import {Input, Component} from 'angular2/core';
import {Util} from '../util/util.js';

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
        var labelCounter = 0
        var slicesDrawn = 0
        new Chartist.Pie(chartSelector, {
            series: [this.data.High, this.data.Medium, this.data.Low]
        }, {
            donut: true,
            donutWidth: '15%',
            showLabel: false

        }).on('draw', function (data) {
            var isEdgeOrExplorer = Util.isEdgeOrExplorer()
            if(!isEdgeOrExplorer) {
                if (data.type === 'slice' && slicesDrawn < 3) {
                    var animateDonutPie = function () {
                        slicesDrawn ++
                        var pathLength = data.element._node.getTotalLength();
                        data.element.attr({
                            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px',
                            'stroke-dashoffset': -pathLength + 'px'
                        });
                        var animationDefinition = {
                            'stroke-dashoffset': {
                                id: 'anim' + data.index,
                                dur: 1000,
                                from: -pathLength + 'px',
                                to: '0px',
                                easing: Chartist.Svg.Easing.easeOutQuint,
                                fill: 'freeze'
                            }
                        };
                        if (data.index !== 0) {
                            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
                        }
                        data.element.animate(animationDefinition, false);
                    }
                    animateDonutPie()
                }
            }
        })
    }
}