import * as R from "ramda";

const numbers: number[] = R.range(1, 9 + 1);
R.tap((n) => console.log(n))(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
