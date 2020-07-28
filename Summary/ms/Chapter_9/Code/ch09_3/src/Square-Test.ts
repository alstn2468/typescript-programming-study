import * as R from "ramda";
import { square } from "./Quadratic";

const input: number[] = R.range(1, 10 + 1);
const squareAfterInc = R.pipe(R.inc, square);

const squareResult = R.pipe(
    R.map(squareAfterInc),
    R.tap((a) => console.log(a))
    // [ 4, 9, 16, 25, 36, 49, 64, 81, 100, 121 ]
)(input);
