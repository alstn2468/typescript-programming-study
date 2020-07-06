export type Person = { name: string; age: number };

export const makePerson = (name: string, age: number = 10): Person => {
    const person = { name: name, age: age };
    return person;
};

console.log(makePerson("Jack")); // { name: 'Jack', age: 10 }
console.log(makePerson("Jane", 33)); // { name: 'Jane', age: 33 }
