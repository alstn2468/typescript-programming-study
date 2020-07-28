import * as R from "ramda";

export const dump = R.pipe(R.tap((n) => console.log(n)));

// const dumpError = <T>(array: T[]): T[] =>
//    R.pipe(R.tap((n) => console.log(n)))(array);

export const dumpArrow = <T>(array: T[]): T[] =>
    R.pipe(R.tap((n) => console.log(n)))(array) as T[];
