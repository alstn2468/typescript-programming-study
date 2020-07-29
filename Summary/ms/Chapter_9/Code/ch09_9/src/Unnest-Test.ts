import * as R from "ramda";

const array = R.range(1, 2 + 1).map((x: number) => {
    return R.range(1, 2 + 1).map((y: number) => {
        return [x, y];
    });
});

console.log(array); // [ [ [ 1, 1 ], [ 1, 2 ] ], [ [ 2, 1 ], [ 2, 2 ] ] ]

const unnestedArray = R.unnest(array);
console.log(unnestedArray); // [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]

const twoUnnestedArray = R.unnest(unnestedArray);
console.log(twoUnnestedArray); // [ 1, 1, 1, 2, 2, 1, 2, 2 ]
