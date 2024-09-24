const oArr = [5, 3, 9, 7];
const deepCopiedArr = [...oArr];
deepCopiedArr[0] = 0;
console.log(oArr, deepCopiedArr);
