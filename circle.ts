import { Observable } from 'rxjs';
export class Circle {
    constructor() {
        console.log('in ciricle constructor');
        let circle = document.getElementById('circle');
        let source = Observable.fromEvent(document, "mousemove")
            .map((e: MouseEvent) => {
                return {
                    x: e.clientX,
                    y: e.clientY
                }
            })
            .filter(value => value.x < 100);
        source.subscribe(x => console.log(x));
    }
};

// read this. https://www.typescriptlang.org/docs/handbook/modules.html
// https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc

// THIS looks relative... probably where I'm going wrong. http://angularfirst.com/systemjs-to-webpack-before-you-begin/

