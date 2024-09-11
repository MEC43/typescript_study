"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor(value = 0) {
        this.value = value;
    }
    add(value) {
        this.value += value;
        return this;
    }
    multiply(value) {
        this.value *= value;
        return this;
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=method-chain.js.map