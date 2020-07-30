import { pick } from "./pick";

const obj = { name: "Jane", age: 22, city: "Seoul", country: "Korea" };
console.log(pick(obj, ["name", "age"])); // { name: 'Jane', age: 22 }
console.log(pick(obj, ["name", "agge"])); //{ name: 'Jane', agge: undefined }
