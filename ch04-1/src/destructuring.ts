import { Person } from './default';

const printPerson = ({ name, age }: Person): void =>
  console.log(`name: ${name}, age: ${age}`);

printPerson({ name: 'Chae', age: 10 });
