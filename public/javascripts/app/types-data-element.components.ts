import {Input, Component} from 'angular2/core';

@Component({
    selector: 'types-data-element',
    templateUrl: 'templates/types-data-element.html'
})

export class TypesDataElementComponent {
    header: string = '';
    number: number = 0;

    @Input() set _data(_data:any) {
        if(_data){
            this.header = _data.header;
            this.number = _data.number;
        }
    }
}