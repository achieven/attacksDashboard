require('zone.js');
import 'reflect-metadata';
import {inject} from  "@angular/core/testing";
var chai = require('chai');
var expect = chai.expect;
import {Util} from '../client/javascripts/util/util'

describe('normalizeValues', function () {
    it('should round number to it\'s closest integer, create rowNumber, and seperate header to capital letters and capitalize it', function(){
        var data = {
            ApplicationStores: 1.5437392795883362,
            Others: 77.35849056603774,
            PasteSites: 16.123499142367066,
            SocialMedia: 4.974271012006861,
            header: 'Clear Web',
            outerRowNumber: 1
        }
        var newData = Util.normalizeValues(data);
        expect(newData).to.be.a('array')
        expect(newData.length).to.be.equal(4)
        expect(newData[0].header).to.be.equal("APPLICATION STORES");
        expect(newData[0].rowNumber).to.be.equal(1)
        expect(newData[0].outerRowNumber).to.be.equal(1)
        expect(newData[0].value).to.be.equal(2);
        expect(newData[1].header).to.be.equal("OTHERS")
        expect(newData[1].rowNumber).to.be.equal(2)
        expect(newData[1].value).to.be.equal(77);
        expect(newData[1].outerRowNumber).to.be.equal(1)
        expect(newData[2].header).to.be.equal("PASTE SITES")
        expect(newData[2].rowNumber).to.be.equal(3)
        expect(newData[2].value).to.be.equal(16);
        expect(newData[2].outerRowNumber).to.be.equal(1)
        expect(newData[3].header).to.be.equal("SOCIAL MEDIA")
        expect(newData[3].rowNumber).to.be.equal(4)
        expect(newData[3].value).to.be.equal(5);
        expect(newData[3].outerRowNumber).to.be.equal(1)
    })
})

describe('seperateToCapitalLetters', function(){
    it('should capitalize if only one word was inserted', function(){
        var str = 'hello'
        var newStr = Util.seperateToCapitalLetters(str)
        expect(newStr).to.equal('HELLO')
    })

    it('should capitalize if multiple words were inserted and seperate to different words', function(){
        var str = 'helloWorld'
        var newStr = Util.seperateToCapitalLetters(str)
        expect(newStr).to.equal('HELLO WORLD')
    })
})