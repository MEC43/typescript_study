const multiply = (result: number, a: number) => result * a; // 07행에서 사용

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tempResult = numbers
  .filter((a) => a % 2 != 0)
  .map((a) => a * a)
  .reduce(multiply, 1);
let result = Math.round(Math.sqrt(tempResult));
console.log(result);
