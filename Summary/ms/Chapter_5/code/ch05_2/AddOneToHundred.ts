import { fold } from './Fold';
import { range } from './Range';

let sum = 0;
for (let val = 1; val <= 100; ) {
    sum += val++;
}
console.log(sum); // 5050

let numbers: number[] = range(1, 100 + 1);
let result = fold(numbers, (result, value) => result + value, 0);
console.log(result);
