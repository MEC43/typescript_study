import { range } from '../ch05-2/range';

let reduceSum: number = range(1, 10 + 1) //
  .reduce((result: number, value: number) => result * value, 1);
console.log(reduceSum);
