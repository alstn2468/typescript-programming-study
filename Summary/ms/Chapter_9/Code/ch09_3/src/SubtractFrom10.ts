import * as R from "ramda";

const subtract = (a) => (b) => a - b;

const subtractFrom10 = subtract(10);

const newArray = R.pipe(
    R.map(subtractFrom10),
    R.tap((a) => console.log(a))
    // 9, 8, 7, 6, 5, 4, 3, 2, 1
)(R.range(1, 9 + 1));
