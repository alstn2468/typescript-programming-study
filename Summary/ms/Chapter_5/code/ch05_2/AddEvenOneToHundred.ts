import { fold } from './Fold';
import { filter } from './Filter';
import { range } from './Range';

let evenSum = 0;
for (let val = 0; val <= 100; val += 2) {
    evenSum += val;
}
console.log(evenSum);

let numbers: number[] = range(1, 100 + 1);
const isEven = (n: number): boolean => n % 2 == 0;
let result = fold(
    filter(numbers, isEven),
    (result, value) => result + value,
    0
);
console.log(result);
