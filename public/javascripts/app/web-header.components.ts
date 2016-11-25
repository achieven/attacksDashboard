import {Input, Component} from 'angular2/core';

@Component({
    selector: 'web-header',
    templateUrl: 'templates/web-header.html'
})

export class WebHeaderComponent {
    @Input() header='';
}