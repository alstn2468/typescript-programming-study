import * as R from "ramda";
import { selectRange } from './SelectRange';

R.pipe(
    R.filter(selectRange(3, 6 + 1)),
    R.tap(n => console.log(n)); // [ 3, 4, 5, 6]
)(R.range(1, 10 + 1))