import { range } from '../ch05-2/range';

const arr: number[] = range(1, 10 + 1);

let odds: number[] = arr.filter((value) => value % 2 != 0);
let evens: number[] = arr.filter((value) => value % 2 == 0);
console.log(odds, evens);
