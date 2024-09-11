"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D = exports.C = void 0;
class C {
    static whoAreYou() {
        return `I'm class C`;
    }
}
exports.C = C;
class D {
    static whoAreYou() {
        return `I'm class D`;
    }
}
exports.D = D;
console.log(C.whoAreYou());
console.log(D.whoAreYou());
//# sourceMappingURL=static-method.js.map