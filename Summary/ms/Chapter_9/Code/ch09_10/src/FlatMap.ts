import * as R from "ramda";

export const flatMap = (f) => R.pipe(R.map(f), R.flatten);
