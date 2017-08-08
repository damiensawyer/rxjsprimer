import {Observable} from 'rxjs';
//alert('hello ddd');
let numbers = [1,2,3];
let source = Observable.from(numbers);
source.subscribe(x => console.log(x));

