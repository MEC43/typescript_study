"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const method_chain_1 = require("./method-chain");
let calc = new method_chain_1.Calculator();
let result = calc.add(1).add(2).multiply(3).multiply(4).value;
console.log(result);
//# sourceMappingURL=method-chain-test.js.map