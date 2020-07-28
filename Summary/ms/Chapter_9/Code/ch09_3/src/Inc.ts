import * as R from "ramda";

const numbers: number[] = R.range(1, 9 + 1);

const incNumber = R.pipe(
    R.tap((a) => console.log("Before inc:", a)),
    // Before inc: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    R.map(R.inc),
    R.tap((a) => console.log("After inc:", a))
    // After inc: [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
);

const newNumbers = incNumber(numbers);
console.log(newNumbers); // [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
