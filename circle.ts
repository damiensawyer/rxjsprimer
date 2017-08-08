import { Observable } from 'rxjs';
export function CircleMove() {
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

};

export (CircleMove);
// read this. https://www.typescriptlang.org/docs/handbook/modules.html
// https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc