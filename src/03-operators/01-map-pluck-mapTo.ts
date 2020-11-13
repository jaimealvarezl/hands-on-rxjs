import {fromEvent, range} from "rxjs";
import {map, mapTo, pluck} from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');


// range(1, 5).pipe(map<number, string>(x => {
//     return (x * 10).toString();
// })).subscribe(console.log)

// keyUp$.subscribe(val => console.log(val))
// const keyUpCode$ = keyUp$.pipe(
//     map(event => event.code)
// );
// keyUpCode$.subscribe(val => console.log('map', val))


// const keyUpPluck$ = keyUp$.pipe(pluck('code'));
// const keyUpPluck$ = keyUp$.pipe(pluck('target', 'baseURI'));
// keyUpPluck$.subscribe(val => console.log('pluck', val))



const keyUpMapTo$ = keyUp$.pipe(mapTo('pressed key'))
keyUpMapTo$.subscribe(val => console.log('mapTo', val))
