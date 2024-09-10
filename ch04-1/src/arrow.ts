export type Person = { name: string; age: number };

export const makePerson = (name: string, age: number = 10): Person => ({
  name,
  age,
});
console.log(makePerson('Kim'));
console.log(makePerson('Woon', 31));
