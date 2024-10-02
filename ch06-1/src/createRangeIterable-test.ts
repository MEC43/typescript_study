import { createRangeIterable } from './createRangeIterable';
const iterator = createRangeIterable(1, 3 + 1); // 반복기 동작X
while (true) {
  const { value, done } = iterator.next(); // 반복기 동작
  if (done) break;
  console.log(value);
}
