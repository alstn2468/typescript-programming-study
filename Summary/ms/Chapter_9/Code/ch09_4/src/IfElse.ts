import * as R from "ramda";

const input: number[] = R.range(1, 10 + 1);
const halfValue = input[input.length / 2];

const subtractOrAdd = R.pipe(
    R.map(R.ifElse(R.lte(halfValue), R.inc, R.dec)),
    R.tap((a) => console.log(a))
    // [ 0, 1, 2, 3, 4, 7, 8, 9, 10, 11 ]
);
const result = subtractOrAdd(input);
