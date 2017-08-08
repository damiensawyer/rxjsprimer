"use strict";
/// <reference path="circle.ts"/>
exports.__esModule = true;
var rxjs_1 = require("rxjs");
//alert('hello ddd ');
var numbers = [1, 2, 3];
var source = rxjs_1.Observable.from(numbers);
source.subscribe(function (x) { return console.log(x); });
// or you can define an observer class... very formal
var MyObserver = (function () {
    function MyObserver() {
    }
    MyObserver.prototype.next = function (value) { console.log("received " + value); };
    MyObserver.prototype.error = function (e) { };
    MyObserver.prototype.complete = function () { };
    return MyObserver;
}());
source.subscribe(new MyObserver());
