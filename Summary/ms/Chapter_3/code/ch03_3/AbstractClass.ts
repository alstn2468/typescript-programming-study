abstract class AbstractPerson6 {
    abstract name: string;
    constructor(public age?: number) {}
}

class Person6 extends AbstractPerson6 {
    constructor(public name: string, age?: number) {
        super(age);
    }
}

let jack6: Person6 = new Person6('Jack', 32);
console.log(jack6); // Person6 { age: 32, name: 'Jack' }
