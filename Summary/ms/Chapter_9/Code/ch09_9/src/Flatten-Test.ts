import * as R from "ramda";

const array = R.range(1, 2 + 1).map((x: number) => {
    return R.range(1, 2 + 1).map((y: number) => {
        return [x, y];
    });
});

console.log(array); // [ [ [ 1, 1 ], [ 1, 2 ] ], [ [ 2, 1 ], [ 2, 2 ] ] ]

const flattedArray = R.flatten(array);
console.log(flattedArray); // [  1, 1, 1, 2, 2, 1, 2, 2]
