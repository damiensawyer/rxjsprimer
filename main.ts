/// <reference path="circle.ts"/>

import {Observable, Observer} from 'rxjs';
import * as cc from './circle';
//alert('hello ddd ');
let numbers = [1,2,3];
//cc.CircleMove();
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