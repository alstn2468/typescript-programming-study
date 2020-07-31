export interface IPerson {
    name: string;
    age?: number;
}

let person: IPerson;
console.log(person?.name);
