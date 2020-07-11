import { range } from './Range';

const array: number[] = range(1, 10 + 1);

let odds: number[] = array.filter((value) => value % 2 != 0);
let evens: number[] = array.filter((value) => value % 2 == 0);
console.log(odds, evens); // [ 1, 3, 5, 7, 9 ] [ 2, 4, 6, 8, 10 ]

const half = array.length / 2;
let belowHalf: number[] = array.filter((v, index) => index < half);
let overHalf: number[] = array.filter((v, index) => index >= half);
console.log(belowHalf, overHalf); // [ 1, 2, 3, 4, 5 ] [ 6, 7, 8, 9, 10 ]
