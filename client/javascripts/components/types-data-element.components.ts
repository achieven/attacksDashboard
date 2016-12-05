import {Input, Component} from 'angular2/core';
import {Util} from '../util/util.js';

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

    ngAfterViewInit(){
        if(Util.isFirefox()){
            $('.image-circle').attr('cx' ,'50%')
            $('.image-circle').attr('cy' ,'50%')
            $('.image-circle').attr('r' ,'40%')
        }
    }
}