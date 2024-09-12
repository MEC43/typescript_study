export type obj = { name: string; age?: number };
let jack: obj = { name: 'Jack', age: 32 };
for (let property in jack) {
  console.log(`${property}: ${jack[property as keyof obj]}`);
}
