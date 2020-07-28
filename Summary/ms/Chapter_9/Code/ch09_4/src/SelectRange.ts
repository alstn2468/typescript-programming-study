import * as R from "ramda";

type NumberToBooleanFunc = (n: number) => boolean;
export const selectRange = (min: number, max: number): NumberToBooleanFunc =>
    R.allPass([R.lte(min), R.gt(max)]);
