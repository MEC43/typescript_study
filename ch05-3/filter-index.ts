import { range } from '../ch05-2/range';

const arr: number[] = range(1, 10 + 1);
const half = arr.length / 2;

let belowHalf: number[] = arr.filter((v, idx) => idx < half);
let overHalf: number[] = arr.filter((v, idx) => idx >= half);
console.log(belowHalf, overHalf);
