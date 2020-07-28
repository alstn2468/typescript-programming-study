import * as R from "ramda";

const reverseSubtract = R.flip(R.subtract);

const newArray = R.pipe(
    R.map(reverseSubtract(10)),
    R.tap((a) => console.log(a))
    // [ -9, -8, -7, -6, -5, -4, -3, -2, -1 ]
)(R.range(1, 9 + 1));
