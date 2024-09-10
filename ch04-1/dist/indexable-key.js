"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeObj = void 0;
const makeObj = (key, value) => ({ [key]: value });
exports.makeObj = makeObj;
console.log((0, exports.makeObj)('name', 'Jack')); // {name: 'Jack'}
console.log((0, exports.makeObj)('firstName', 'Jane')); // {firstName: 'Jane}
//# sourceMappingURL=indexable-key.js.map