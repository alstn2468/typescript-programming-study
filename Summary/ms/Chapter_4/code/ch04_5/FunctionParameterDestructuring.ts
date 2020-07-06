export type Person = { name: string; age: number };

const printPerson = ({ name, age }: Person): void =>
    console.log(`name: ${name}, age: ${age}`);

printPerson({ name: "Jack", age: 32 }); // name: Jack, age: 32
