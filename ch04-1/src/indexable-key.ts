export type KeyValueType = {
  [key: string]: string;
};

export const makeObj = (key: string, value: string) => ({ [key]: value });
console.log(makeObj('name', 'Jack')); // {name: 'Jack'}
console.log(makeObj('firstName', 'Jane')); // {firstName: 'Jane}
