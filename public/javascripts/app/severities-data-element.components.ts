import {Input, Component} from 'angular2/core';

@Component({
    selector: 'severities-data-element',
    templateUrl: 'templates/severities-data-element.html',
    directives: [SeveritiesDataElementComponent]
})

export class SeveritiesDataElementComponent {
    header: string = '';
    value: number = 0;

    @Input() set _data(_data:any) {
        if(_data){
            this.header = _data.header;
            this.value = _data.value;
        }
    }
}