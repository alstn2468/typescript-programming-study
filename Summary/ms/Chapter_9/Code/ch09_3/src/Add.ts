import * as R from "ramda";

const incNumber = R.pipe(
    R.map(R.add(1)),
    R.tap((a) => console.log("After add(1):", a))
    // After add(1): [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
);

const newNumbers = incNumber(R.range(1, 9 + 1));
