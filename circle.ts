import { Observable } from 'rxjs';
export class Circle {
    constructor() {
        console.log('in ciricle constructor');
        this.bindToCircle();
    }

    bindToCircle() {
        console.log('in bind to Circle');
        let circle = document.getElementById('circle');
        console//.log(circle);
        let source = Observable.fromEvent(document, "mousemove")
            .map((e: MouseEvent) => {
                return {
                    x: e.clientX,
                    y: e.clientY
                }
            })
            .delay(10)
            .filter(value => value.x < 1000);
        source.subscribe(x => {
            console.log(`yay ${x}`);
            circle.style.left = x.x.toString();
            circle.style.top = x.y.toString();


        });

    }
};

// read this. https://www.typescriptlang.org/docs/handbook/modules.html
// https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc

// THIS looks relative... probably where I'm going wrong. http://angularfirst.com/systemjs-to-webpack-before-you-begin/

