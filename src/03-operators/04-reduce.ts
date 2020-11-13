import {interval} from "rxjs";
import {reduce, take, tap} from "rxjs/operators";

const totalReducer = (acc: number, value: number): number => {
  return acc + value;
}

interval(1000)
  .pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
  )
  .subscribe({
    next: val => console.log("next: ", val),
    complete: () => console.log("complete")
  })
