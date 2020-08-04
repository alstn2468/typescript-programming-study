import * as R from "ramda";
import { Just } from "../classes/Just";

console.log(Just.of(100).isJust()); // true
console.log(Just.of(100).isNothing()); // false
console.log(Just.of(100).getOrElse(1)); // 100
console.log(Just.of(100).map(R.identity).getOrElse(1)); // 100
console.log(Just.of(R.identity).ap(100).getOrElse(1)); // 100
console.log(Just.of(100).chain(Just.of).getOrElse(1)); // 100
