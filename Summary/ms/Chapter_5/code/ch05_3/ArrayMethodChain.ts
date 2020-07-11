const multiply = (result, val) => result * val;

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tempResult = numbers
    .filter((val) => val % 2 != 0)
    .map((val) => val * val)
    .reduce(multiply, 1);
let result = Math.round(Math.sqrt(tempResult));
console.log(result); // 945
