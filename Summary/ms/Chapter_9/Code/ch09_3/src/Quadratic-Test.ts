import * as R from "ramda";
import { quadratic } from "./Quadratic";

const input: number[] = R.range(1, 10 + 1);
const quadraticResult = R.pipe(
    R.map(quadratic),
    R.tap((a) => console.log(a))
    // [ 4, 9, 16, 25, 36, 49, 64, 81, 100, 121 ]
)(input);
