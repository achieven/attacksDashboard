import {Component} from 'angular2/core';
import  {DataRowComponent} from './data-row.components.js'

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
        $.ajax({
            type: 'get',
            url: '/getdata',
            contentType: 'application/json',
            success: function (data) {
                data = JSON.parse(data)
                thisComponent.clearWeb = {
                    header: 'CLEAR WEB',
                    typesData: data.ClearWeb.Types,
                    severitiesData: data.ClearWeb.Severities,
                    sourcesData: data.ClearWeb.Sources,
                    outerRowNumber: 1,
                    headerImage: 'images/transparent-clear-web.png'
                }
                thisComponent.darkWeb = {
                    header: 'DARK WEB',
                    typesData: data.DarkWeb.Types,
                    severitiesData: data.DarkWeb.Severities,
                    sourcesData: data.DarkWeb.Sources,
                    outerRowNumber: 2,
                    headerImage: 'images/new-dark-web.png'
                }
            }
        })
    }
}