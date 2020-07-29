import * as R from "ramda";

const array: number[] = [3, 4];
const newArray = R.prepend(1)(array);
console.log(array, newArray); // [ 3, 4 ] [ 1, 3, 4 ]
