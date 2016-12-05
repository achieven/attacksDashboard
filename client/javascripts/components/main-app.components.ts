import {Component} from 'angular2/core';
import {MainDataComponent} from './main-data.components.js'
import {Util} from '../util/util.js'


@Component({
    selector: 'main-app',
    templateUrl: 'templates/main-app.html',
    directives: [MainDataComponent]

})

export class MainAppComponent {
    constructor(){
        Util.initBrowserName()
    }
}