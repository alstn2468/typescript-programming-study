import { range } from './Range';
import { fold } from './Fold';
import { map } from './Map';

let squareSum = 0;
for (let val = 1; val <= 100; ++val) {
    squareSum += val * val;
}
console.log(squareSum); // 338350

let numbers: number[] = range(1, 100 + 1);
let result = fold(
    map(numbers, (value) => value * value),
    (result, value) => result + value,
    0
);
console.log(result); // 338350
