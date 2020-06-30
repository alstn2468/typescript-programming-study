interface IPerson {
    name: string;
    age: number;
}

let good: IPerson = { name: "Jack", age: 32 };

let bad1: IPerson = { name: "Jack" };
let bad2: IPerson = { age: 32 };
let bad3: IPerson = {};
let bad4: IPerson = { name: "Jack", age: 32, etc: true };
