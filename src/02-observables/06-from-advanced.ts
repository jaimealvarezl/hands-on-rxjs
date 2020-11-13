import {from, of} from "rxjs";

const observer = {
  next: val => console.log('next :', val),
  complete: () => console.log("complete")
}

// const source$ = from(Promise.resolve([0, 1, 2, 3]));
const source$ = of(Promise.resolve([0, 1, 2, 3]));

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Jaime');

source$.subscribe(console.log)

// const source$ = from(fetch('https://api.github.com/users/jaimealv994'));

// source$.pipe(switchMap(res => {
//   return res.json()
// })).subscribe(observer)

// for (let i of iterable) {
//   console.log(i)
// }
