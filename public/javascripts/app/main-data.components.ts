import {Component} from 'angular2/core';
import  {DataRowComponent} from './data-row.components.js'

@Component({
    selector: 'main-data',
    templateUrl: 'templates/main-data.html',
    directives: [DataRowComponent]
})

export class MainDataComponent {
    clearHeader:string = 'Clear Web';
    darkHeader:string = 'Dark Web';
}