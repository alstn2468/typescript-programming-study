import * as R from "ramda";
import { selectRange } from "./SelectRange";
export const notRange = (min: number, max: number) =>
    R.pipe(selectRange(min, max), R.not);
