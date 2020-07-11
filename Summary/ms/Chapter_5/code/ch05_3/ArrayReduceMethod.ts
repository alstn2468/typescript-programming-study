import { range } from './Range';

let reduceSum: number = range(1, 100 + 1).reduce(
    (result: number, value: number) => result + value,
    0
);
console.log(reduceSum); // 5050

let reduceMul: number = range(1, 10 + 1).reduce(
    (result: number, value: number) => result * value,
    1
);
console.log(reduceMul); // 3628800
