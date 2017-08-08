import { Circle } from './circle';
import {Observable, Observer} from 'rxjs';

var deps = [new Circle()]; // by doing this we're causing Circle to be included in webpack. I'm guessing there's a cleaner way to do this.

let numbers = [1,2,3];
let source = Observable.from(numbers);
source.subscribe(x => console.log(x));

// or you can define an observer class... very formal

class MyObserver implements Observer<number>
{
  next(value:any){console.log(`received ${value}`)}
  error(e){}
  complete(){}

}

source.subscribe(new MyObserver());