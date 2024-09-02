// 전개 연산자
let part1 = { name: 'Jane' };
let part2 = { age: 22 };
let part3 = { city: '서울', country: '한국' };

let merged = { ...part1, ...part2, ...part3 };

console.log(merged);
