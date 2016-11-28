import {Input, Component} from 'angular2/core';

@Component({
    selector: 'types-data-element',
    templateUrl: 'templates/types-data-element.html'
})

export class TypesDataElementComponent {
    firstWord: string = '';
    secondWord: string = '';
    number: number = 0;
    imagePath: string = '';

    @Input() set _data(_data:any) {
        if(_data){
            var header = _data.header.split(' ')
            if(header.length > 0){
                this.firstWord = header[0]
                if(header.length > 1){
                    this.secondWord = header[1]
                }
                else {
                    this.secondWord = ''
                }
            }
            this.number = _data.number;
            this.imagePath = _data.imagePath;
        }
    }
}