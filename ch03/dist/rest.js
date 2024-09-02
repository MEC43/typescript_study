"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
let address = {
    country: '한국',
    city: '서울',
    address1: '강남구',
    address2: '신사동 123',
    address3: 'ABC빌딩 2층',
};
const { country, city } = address, detail = __rest(address, ["country", "city"]);
console.log(detail);
//# sourceMappingURL=rest.js.map