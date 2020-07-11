import { range } from './Range';

let squares: number[] = range(1, 5 + 1).map((val: number) => val * val);
console.log(squares); // [ 1, 4, 9, 16, 25 ]

let names: string[] = range(1, 5 + 1).map((val, index) => `[${index}]: ${val}`);
console.log(names); // [ '[0]: 1', '[1]: 2', '[2]: 3', '[3]: 4', '[4]: 5' ]
