import {Component} from 'angular2/core';

@Component({
    selector: 'auction-app',
    templateUrl: 'templates/product.html'
})

export class AppComponent {
    helloWorld:string = '';
    newHelloWorld:string = '';

    constructor() {
        this.helloWorld = 'Hello World'
        this.newHelloWorld = ''
    }

    bid() {
        console.log(this.newHelloWorld)
        this.helloWorld = this.newHelloWorld
    }
}