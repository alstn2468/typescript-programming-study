import * as R from "ramda";
import { flatMap } from "./FlatMap";

const unneset = flatMap(R.identity);

const array = [[1], [2], [3]];

R.pipe(
    unneset,
    R.tap((n) => console.log(n)) // [1 , 2, 3]
)(array);
