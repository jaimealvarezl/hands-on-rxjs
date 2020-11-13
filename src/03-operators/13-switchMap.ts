import {fromEvent, interval} from "rxjs";
import {switchMap} from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$.pipe(
    switchMap(() => interval(1000))
).subscribe(console.log)
