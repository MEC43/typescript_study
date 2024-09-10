"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
const makePerson = (name, age = 10) => {
    const person = { name: name, age: age };
    return person;
};
exports.makePerson = makePerson;
console.log((0, exports.makePerson)('Kim'));
console.log((0, exports.makePerson)('Woon', 31));
//# sourceMappingURL=default.js.map