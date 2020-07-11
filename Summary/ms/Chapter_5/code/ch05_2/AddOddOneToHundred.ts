import { fold } from './Fold';
import { filter } from './Filter';
import { range } from './Range';

let oddSum = 0;
for (let val = 1; val <= 100; val += 2) {
    oddSum += val;
}
console.log(oddSum);

let numbers: number[] = range(1, 100 + 1);
const isOdd = (n: number): boolean => n % 2 != 0;
let result = fold(filter(numbers, isOdd), (result, value) => result + value, 0);
console.log(result);
