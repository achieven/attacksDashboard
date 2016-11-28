System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Util;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Util = (function () {
                function Util() {
                }
                Util.isIeBrowser = function (callback) {
                    var userAgent = navigator.userAgent;
                    if ((userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1) || userAgent.indexOf('MSIE') > -1) {
                        return true;
                    }
                };
                Util.normalizeValues = function (data) {
                    var rowNumber = 1;
                    var sumAllValues = 0;
                    var newData = [];
                    for (var key in data) {
                        if (key != 'header' && key != 'outerRowNumber') {
                            sumAllValues += Math.round(data[key]);
                            newData.push({
                                header: key,
                                value: Math.round(data[key]),
                                rowNumber: rowNumber,
                                outerRowNumber: data.outerRowNumber
                            });
                            rowNumber++;
                        }
                    }
                    if (sumAllValues === 99) {
                        newData.length > 0 && newData[0].value++;
                    }
                    else if (sumAllValues === 101) {
                        newData.length > 0 && newData[0].value--;
                    }
                    return newData;
                };
                Util = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Util);
                return Util;
            }());
            exports_1("Util", Util);
        }
    }
});
