"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRandomNumber = makeRandomNumber;
let MAX_AGE = 100;
function makeRandomNumber(max = MAX_AGE) {
    return Math.ceil(Math.random() * max);
}
//# sourceMappingURL=makeRandomNumber.js.map