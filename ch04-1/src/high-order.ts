export type NumberToNumberFunc = (c: number) => number;
export const add = (a: number): NumberToNumberFunc => {
  //NumberToNumberFunc 타입의 함수 반환
  const _add: NumberToNumberFunc = (b: number): number => {
    //number타입의 값 반환
    return a + b;
  };
  return _add;
};

// const add2 =
//   (a: number): ((a: number) => number) =>
//   (b: number): number =>
//     a + b;
// const result = add(1)(2);
// console.log(result);
