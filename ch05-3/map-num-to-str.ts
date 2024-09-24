import { range } from '../ch05-2/range';
let names: string[] = range(1, 5 + 1).map((val, idx) => `[${idx}]: ${val}`);
console.log(names);
