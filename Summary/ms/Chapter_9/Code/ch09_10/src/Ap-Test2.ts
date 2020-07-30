import * as R from "ramda";

const callAndAppend = R.pipe(
    R.ap([R.multiply(2), R.add(10)]),
    R.tap((a) => console.log(a))
);

const input = [1, 2, 3];
const result = callAndAppend(input); // [ 2, 4, 6, 11, 12, 13 ]
