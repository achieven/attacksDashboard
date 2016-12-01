require('zone.js');
import 'reflect-metadata';
import {inject} from  "@angular/core/testing";
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
import {Util} from '../public/javascripts/util/util'

describe('App Component Test', function () {

    it('should create header seperated by Capital letters, and rowNumber, and ignore "header", "outerRowNumber" keys', function(){
        var data = {
            header: 'Clear Web',
            invalidNumber1: "",
            invalidNumber2: undefined,
            invalidNumber3: null,
            invalidNumber4: [],
            invalidNumber5: {},
            invalidNumber6: Symbol(),
            invalidNumber7: "1.2.3",
            invalidNumber8: -1,
            
            validNumber1: ".1",
            validNumber2: .1,
            validNumber3: "1.1",
            validNumber4: 1.1,
            validNumber5: "1",
            validNumber6: 1,
            validNumber7: "0",
            validNumber8: 0,
            outerRowNumber: 1,
        }
        var newData = Util.normalizeValues(data);
        expect(newData).to.be.a('array')
        expect(newData.length).to.be.equal(8)
        expect(newData[0].header).to.be.equal("validNumber1")
        expect(newData[1].header).to.be.equal("validNumber2")
        expect(newData[2].header).to.be.equal("validNumber3")
        expect(newData[3].header).to.be.equal("validNumber4")
        expect(newData[4].header).to.be.equal("validNumber5")
        expect(newData[5].header).to.be.equal("validNumber6")
        expect(newData[6].header).to.be.equal("validNumber7")
        expect(newData[7].header).to.be.equal("validNumber8")
        
    })
    it('should preserve numbers if all are integers and amount to 100', function(){
        var data = {
            header: 'Clear Web',
            ApplicationStores: 51,
            SocialMedia: 49,
            outerRowNumber: 1,
        }
        var newData = Util.normalizeValues(data);
        expect(newData).to.be.a('array')
        expect(newData.length).to.be.equal(2)
        expect(newData[0]).to.eql({
            header: "ApplicationStores",
            outerRowNumber: 1,
            rowNumber: 1,
            value: 51,
            oldValue: 51
        })
        expect(newData[1]).to.eql({
            header: "SocialMedia",
            outerRowNumber: 1,
            rowNumber: 2,
            value: 49,
            oldValue: 49
        })
    })
    it('should increase first if numbers are rounded to zero, so data won\'t have zeros', function(){
        var data = {
            header: 'Clear Web',
            ApplicationStores: 0.9,
            SocialMedia: 0.8,
            PasteSites :1.2,
            Others :97.1,
            outerRowNumber: 1
        }
        var newData = Util.normalizeValues(data);
        expect(newData).to.be.a('array')
        expect(newData.length).to.be.equal(4)
        expect(newData[0]).to.eql({
            header: "ApplicationStores",
            outerRowNumber: 1,
            rowNumber: 1,
            value: 1,
            oldValue: 0.9
        })
        expect(newData[1]).to.eql({
            header: "SocialMedia",
            outerRowNumber: 1,
            rowNumber: 2,
            value: 1,
            oldValue: 0.8
        })
        expect(newData[2]).to.eql({
            header: "PasteSites",
            outerRowNumber: 1,
            rowNumber: 3,
            value: 1,
            oldValue: 1.2,
        })
        expect(newData[3]).to.eql({
            header: "Others",
            outerRowNumber: 1,
            rowNumber: 4,
            value: 97,
            oldValue: 97.1,
        })

        data = {
            header: 'Clear Web',
            ApplicationStores: 0.9,
            SocialMedia: 0.1,
            Others :99,
            outerRowNumber: 1
        }
        newData = Util.normalizeValues(data);
        expect(newData).to.be.a('array')
        expect(newData.length).to.be.equal(3)
        expect(newData[0]).to.eql({
            header: "ApplicationStores",
            outerRowNumber: 1,
            rowNumber: 1,
            value: 1,
            oldValue: 0.9
        })
        expect(newData[1]).to.eql({
            header: "SocialMedia",
            outerRowNumber: 1,
            rowNumber: 2,
            value: 1,
            oldValue: 0.1
        })
        expect(newData[2]).to.eql({
            header: "Others",
            outerRowNumber: 1,
            rowNumber: 3,
            value: 98,
            oldValue: 99,
        })
    })
    it('should increase the highest ones in order to normalize to 100', function () {
        var data = {
            header: 'Clear Web',
            ApplicationStores: 49.3,
            SocialMedia: 50.7,
            outerRowNumber: 1,
        }
        var newData = Util.normalizeValues(data);
        expect(newData).to.be.a('array')
        expect(newData.length).to.be.equal(2)
        expect(newData[0]).to.eql({
            header: "ApplicationStores",
            outerRowNumber: 1,
            rowNumber: 1,
            value: 49,
            oldValue: 49.3
        })
        expect(newData[1]).to.eql({
            header: "SocialMedia",
            outerRowNumber: 1,
            rowNumber: 2,
            value: 51,
            oldValue: 50.7
        })
        
        data = {
            header: 'Clear Web',
            ApplicationStores: 49.7,
            SocialMedia: 50.3,
            outerRowNumber: 1,
        }
        newData = Util.normalizeValues(data);
        expect(newData).to.be.a('array')
        expect(newData.length).to.be.equal(2)
        expect(newData[0]).to.eql({
            header: "ApplicationStores",
            outerRowNumber: 1,
            rowNumber: 1,
            value: 49,
            oldValue: 49.7
        })
        expect(newData[1]).to.eql({
            header: "SocialMedia",
            outerRowNumber: 1,
            rowNumber: 2,
            value: 51,
            oldValue: 50.3
        })
        
        data = {
            header: 'Clear Web',
            ApplicationStores: 50.5,
            SocialMedia: 49.5,
            outerRowNumber: 1,
        }
        newData = Util.normalizeValues(data);
        expect(newData).to.be.a('array')
        expect(newData.length).to.be.equal(2)
        expect(newData[0]).to.eql({
            header: "ApplicationStores",
            outerRowNumber: 1,
            rowNumber: 1,
            value: 51,
            oldValue: 50.5
        })
        expect(newData[1]).to.eql({
            header: "SocialMedia",
            outerRowNumber: 1,
            rowNumber: 2,
            value: 49,
            oldValue: 49.5
        })
        
        data = {
            header: 'Clear Web',
            ApplicationStores: 33.3,
            SocialMedia: 33.3,
            PasteSites: 33.4,
            outerRowNumber: 1
        }
        newData = Util.normalizeValues(data);
        expect(newData).to.be.a('array')
        expect(newData.length).to.be.equal(3)
        expect(newData[0]).to.eql({
            header: "ApplicationStores",
            outerRowNumber: 1,
            rowNumber: 1,
            value: 33,
            oldValue: 33.3
        })
        expect(newData[1]).to.eql({
            header: "SocialMedia",
            outerRowNumber: 1,
            rowNumber: 2,
            value: 33,
            oldValue: 33.3
        })
        expect(newData[2]).to.eql({
            header: "PasteSites",
            outerRowNumber: 1,
            rowNumber: 3,
            value: 34,
            oldValue: 33.4
        })
        
        data = {
            header: 'Clear Web',
            ApplicationStores :1.5437392795883362,
            SocialMedia :4.974271012006861,
            PasteSites :16.123499142367066,
            Others :77.35849056603774,
            outerRowNumber: 1,
        }

        newData = Util.normalizeValues(data);
        expect(newData).to.be.a('array')
        expect(newData.length).to.be.equal(4)
        expect(newData[0]).to.eql({
            header: "ApplicationStores",
            outerRowNumber: 1,
            rowNumber: 1,
            value: 1,
            oldValue: 1.5437392795883362
        })
        expect(newData[1]).to.eql({
            header: "SocialMedia",
            outerRowNumber: 1,
            rowNumber: 2,
            value: 4,
            oldValue: 4.974271012006861
        })
        expect(newData[2]).to.eql({
            header: "PasteSites",
            outerRowNumber: 1,
            rowNumber: 3,
            value: 17,
            oldValue: 16.123499142367066,
        })
        expect(newData[3]).to.eql({
            header: "Others",
            outerRowNumber: 1,
            rowNumber: 4,
            value: 78,
            oldValue: 77.35849056603774,
        })

        data = {
            header: 'Clear Web',
            BlackMarkets: 10.294117647058822,
            HackingForums: 44.11764705882353,
            PasteSites: 13.23529411764706,
            Others: 32.35294117647059,
            outerRowNumber: 1
        }
        newData = Util.normalizeValues(data);
        expect(newData).to.be.a('array')
        expect(newData.length).to.be.equal(4)
        expect(newData[0]).to.eql({
            header: "BlackMarkets",
            outerRowNumber: 1,
            rowNumber: 1,
            value: 10,
            oldValue: 10.294117647058822
        })
        expect(newData[1]).to.eql({
            header: "HackingForums",
            outerRowNumber: 1,
            rowNumber: 2,
            value: 45,
            oldValue: 44.11764705882353
        })
        expect(newData[2]).to.eql({
            header: "PasteSites",
            outerRowNumber: 1,
            rowNumber: 3,
            value: 13,
            oldValue: 13.23529411764706,
        })
        expect(newData[3]).to.eql({
            header: "Others",
            outerRowNumber: 1,
            rowNumber: 4,
            value: 32,
            oldValue: 32.35294117647059,
        })
    })
})