import * as R from "ramda";
import { sum } from "./Sum";

export const curriedSum = R.curryN(4, sum);
