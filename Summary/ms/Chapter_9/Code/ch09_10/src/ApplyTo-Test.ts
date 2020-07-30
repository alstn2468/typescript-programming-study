import * as R from "ramda";

const T = (value) =>
    R.pipe(
        R.applyTo(value),
        R.tap((value) => console.log(value))
    );

const value100 = T(100);
const sameValue = value100(R.identity); // 100
const add1Value = value100(R.add(1)); // 101
