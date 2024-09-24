import { mergeArr } from './mergeArr';

const mergedArr1: string[] = mergeArr(['Hello'], ['World']);
console.log(mergedArr1);

const mergedArr2: number[] = mergeArr([1], [2, 3], [4, 5, 6], [7, 8, 9, 10]);
console.log(mergedArr2);
