import * as R from "ramda";

const addIndex = R.pipe(
    R.addIndex(R.map)(R.add),
    R.tap((a) => console.log(a))
    // [ 1, 3, 5, 7, 9, 11, 13, 15, 17 ]
);

const newNumbers = addIndex(R.range(1, 9 + 1));
