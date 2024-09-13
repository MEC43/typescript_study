import { arrayLength, isEmpty } from './arrayLength';

let numArray1: number[] = [1, 2, 3];
let strArray1: string[] = ['Hello', 'World'];

type IPerson1 = { name: string; age?: number };
let personArray: IPerson1[] = [{ name: 'Jack' }, { name: 'Jane', age: 32 }];

console.log(
  arrayLength(numArray1), //
  arrayLength(strArray1), //
  arrayLength(personArray), //
  isEmpty([]),
  isEmpty([1])
);
