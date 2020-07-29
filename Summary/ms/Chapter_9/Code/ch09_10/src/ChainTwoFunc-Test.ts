import * as R from "ramda";
import { chainTwoFunc } from "./ChainTwoFunc";

const array = [1, 2, 3];
R.pipe(
    chainTwoFunc(R.append, R.head),
    R.tap((n) => console.log(n)) // [ 1, 2, 3, 1 ]
)(array);
