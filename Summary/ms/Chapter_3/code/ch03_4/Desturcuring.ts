interface IPerson {
    name: string;
    age: number;
}

let jack: IPerson = { name: "Jack", age: 32 };

let jack_name = jack.name;
let jack_age = jack.age;

let { name, age } = jack;

console.log(name, age); // Jack 32
