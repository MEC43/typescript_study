export const mergeArr = <T>(...arrays: readonly T[][]): T[] => {
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    const array: T[] = arrays[i];

    result = [...result, ...array];
    // result와 array 배열을 각각 전개하고 결합해야
    // T[]타입 배열을 생성 할 수 있ㅇ므
  }
  return result;
};
