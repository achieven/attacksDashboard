import {Input, Component} from 'angular2/core';
import {WebHeaderComponent} from './web-header.components.js'
import {DataBoxComponent} from './data-box.components.js'


@Component({
    selector: 'data-row',
    templateUrl: 'templates/data-row.html',
    directives: [WebHeaderComponent, DataBoxComponent]
})

export class DataRowComponent {
    header: string = '';
    typesData: Object = {};
    severitiesData: Object = {};
    sourcesData: Object = {};
    
    @Input() set _webData(_webData: any){
        if(_webData){
            this.header = _webData.header;
            this.typesData = $.extend({},_webData.typesData,{header: 'Types'});
            this.severitiesData = $.extend({},_webData.severitiesData,{header: 'Severities'});
            this.sourcesData = $.extend({},_webData.sourcesData,{header: 'Sources'});
        }
    }
}