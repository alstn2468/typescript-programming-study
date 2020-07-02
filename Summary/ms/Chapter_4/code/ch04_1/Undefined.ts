interface INameable {
    name: string;
}

function getName(o: INameable) {
    return o != undefined ? o.name : "Unknown name";
}

let n = getName(undefined);
console.log(n); // Unknown name
console.log(getName({ name: "Jack" })); // Jack

interface IAgeable {
    age?: number;
}

function getAge(o: IAgeable) {
    return o != undefined && o.age ? o.age : 0;
}

console.log(getAge(undefined)); // 0
console.log(getAge(null)); // 0
console.log(getAge({ age: 32 })); // 32
