"use strict";
const calc = (value, cb) => {
    let add = (a, b) => a + b;
    function multiply(a, b) {
        return a * b;
    }
    let result = multiply(add(1, 2), value);
    cb(result);
};
calc(30, (result) => console.log(`result id ${result}`)); //result is 90
//# sourceMappingURL=nested.js.map