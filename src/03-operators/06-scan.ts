import {from} from "rxjs";
import {scan} from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];


const totalAcc = (acc, val) => acc + val;

from(numbers)
  .pipe(scan(totalAcc))
  .subscribe(console.log)
