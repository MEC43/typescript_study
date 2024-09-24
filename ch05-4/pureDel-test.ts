import { pureDel } from './pureDel';

const mixedArr: object[] = [
  [],
  { name: 'Jack' },
  { name: 'Jane', age: 32 },
  ['description'],
];
const objsOnly: object[] = pureDel(mixedArr, (val) => Array.isArray(val));
console.log('원본 배열 :', mixedArr, '객체만:', objsOnly);
