import {Input, Component} from 'angular2/core';

@Component({
    selector: 'web-header',
    templateUrl: 'templates/web-header.html'
})

export class WebHeaderComponent {
    header: string = '';
    image: string = '';
    @Input() set _header(_header: any){
        this.header = _header.header
        this.image = _header.image
    }
}