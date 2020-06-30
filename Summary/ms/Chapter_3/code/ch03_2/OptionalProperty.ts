interface IPerson2 {
    name: string;
    age: number;
    etc?: boolean;
}

let good1: IPerson2 = { name: "Jack", age: 32 };
let good2: IPerson2 = { name: "Jack", age: 32, etc: true };
