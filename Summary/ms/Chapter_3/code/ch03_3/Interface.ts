interface IPerson4 {
    name: string;
    age?: number;
}

class Person4 implements IPerson4 {
    name: string;
    age: number;
}

class Person5 implements IPerson4 {
    constructor(public name: string, public age?: number) {}
}

let jack4: IPerson4 = new Person5('Jack', 32);
console.log(jack4); // Person5 { name: 'Jack', age: 32 }
