import { pickTwo } from "./pickTwo";

const obj = { name: "Jane", age: 22, city: "Seoul", country: "Korea" };
console.log(pickTwo(obj, ["name", "age"])); // { name: 'Jane', age: 22 }
console.log(pickTwo(obj, ["name", "agge"])); // Error
