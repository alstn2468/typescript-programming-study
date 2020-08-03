import { Identity } from "../classes/Identity";

const one = new Identity(1),
    anotherOne = new Identity(1);
const two = new Identity(2);

console.log(one.equals(anotherOne)); // true
console.log(one.equals(two)); // false
console.log(one.equals(1)); // false
console.log(one.equals(null)); // false
console.log(one.equals([1])); // false
