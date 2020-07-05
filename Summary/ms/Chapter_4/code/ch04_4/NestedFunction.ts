const calc = (value: number, cb: (number) => void): void => {
    let add = (a: number, b: number): number => a + b;
    function multiply(a: number, b: number): number {
        return a * b;
    }

    let result = multiply(add(1, 2), value);
    cb(result);
};

calc(30, (result: number): void => {
    console.log(`result is ${result}`);
}); // result is 90
