class Person1 {
    name: string;
    age?: number;
}

let jack1: Person1 = new Person1();
jack1.name = 'Jack';
jack1.age = 32;

console.log(jack1); // Person1 { name: 'Jack', age: 32 }
