import * as R from "ramda";
import { notRange } from "./NotRange";

R.pipe(
    R.filter(notRange(3, 6 + 1)),
    R.tap((n) => console.log(n)) // [ 1, 2, 7, 8, 9, 10]
)(R.range(1, 10 + 1));
