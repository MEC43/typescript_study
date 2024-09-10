"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const add = (a) => {
    //NumberToNumberFunc 타입의 함수 반환
    const _add = (b) => {
        //number타입의 값 반환
        return a + b;
    };
    return _add;
};
exports.add = add;
// const add2 =
//   (a: number): ((a: number) => number) =>
//   (b: number): number =>
//     a + b;
// const result = add(1)(2);
// console.log(result);
//# sourceMappingURL=high-order.js.map