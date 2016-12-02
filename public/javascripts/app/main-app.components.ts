import {Component} from 'angular2/core';
import {MainDataComponent} from './main-data.components.js'


@Component({
    selector: 'main-app',
    templateUrl: 'templates/main-app.html',
    directives: [MainDataComponent]

})

export class MainAppComponent {
}