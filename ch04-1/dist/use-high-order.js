"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const high_order_1 = require("./high-order");
let fn = (0, high_order_1.add)(1);
let result = fn(2);
console.log(result); // 3
console.log((0, high_order_1.add)(1)(2)); // 3
//# sourceMappingURL=use-high-order.js.map