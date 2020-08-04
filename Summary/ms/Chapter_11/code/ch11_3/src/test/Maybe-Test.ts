import * as R from "ramda";
import { Maybe, IMaybe } from "../classes/Maybe";

const divide = (a: number) => (b: number): IMaybe<number> =>
    b ? Maybe.Just(a / b) : Maybe.Nothing;

console.log(divide(1)(1).map(R.add(1)).getOrElse(0)); // 2
console.log(divide(1)(0).map(R.add(1)).getOrElse(0)); // 0
