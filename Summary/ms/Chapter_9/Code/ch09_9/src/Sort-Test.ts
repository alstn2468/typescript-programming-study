import * as R from "ramda";

type voidToNumberFunc = () => number;
const makeRandomNumber = (max: number): voidToNumberFunc => (): number =>
    Math.floor(Math.random() * max);

const array = R.range(1, 5 + 1).map(makeRandomNumber(100));
const sortedArray = R.sort((a: number, b: number): number => a - b)(array);
console.log(array, sortedArray); // [ 20, 55, 9, 13, 51 ] [ 9, 13, 20, 51, 55 ]
