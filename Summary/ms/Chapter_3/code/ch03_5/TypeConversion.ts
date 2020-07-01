let person: object = { name: 'Jack', age: 32 };
// let personName = person.name;
console.log((<{ name: string }>person).name); // Jack
