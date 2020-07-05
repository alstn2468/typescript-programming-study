const add = (a: number): ((number) => number) => (b: number): number => a + b;
const result = add(1)(2);
console.log(result); // 3

type NumberToNumberFunc = (number) => number;
const add2 = (a: number): NumberToNumberFunc => {
    const _add2: NumberToNumberFunc = (b: number): number => {
        return a + b;
    };
    return _add2;
};

let fn: NumberToNumberFunc = add2(1);
console.log(fn(2)); // 3
console.log(add2(1)(2)); // 3
