import * as R from "ramda";
import { dump, dumpArrow } from "./Dump";

dump(R.range(1, 10)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
dumpArrow(R.range(1, 10)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
