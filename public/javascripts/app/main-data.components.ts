import {Component} from 'angular2/core';
import  {DataRowComponent} from './data-row.components.js'
import {Parse} from '../util/parse.js'

@Component({
    selector: 'main-data',
    templateUrl: 'templates/main-data.html',
    directives: [DataRowComponent]
})

export class MainDataComponent {
    clearWeb:Object = '';
    darkWeb:Object = '';

    constructor() {
        var thisComponent = this;
        Parse.parseJson(function (data) {
            thisComponent.clearWeb = {
                header: 'Clear Web',
                typesData: data.ClearWeb.Types,
                severitiesData: data.ClearWeb.Severities,
                sourcesData: data.ClearWeb.Sources
            }
            thisComponent.darkWeb = {
                header: 'Dark Web',
                typesData: data.DarkWeb.Types,
                severitiesData: data.DarkWeb.Severities,
                sourcesData: data.DarkWeb.Sources
            }
        });
    }
}