"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
function CircleMove() {
    var circle = document.getElementById('circle');
    var source = rxjs_1.Observable.fromEvent(document, "mousemove")
        .map(function (e) {
        return {
            x: e.clientX,
            y: e.clientY
        };
    })
        .filter(function (value) { return value.x < 100; });
    source.subscribe(function (x) { return console.log(x); });
}
exports.CircleMove = CircleMove;
;
(CircleMove);
// read this. https://www.typescriptlang.org/docs/handbook/modules.html
// https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc 
