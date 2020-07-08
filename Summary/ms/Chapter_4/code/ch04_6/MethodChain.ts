class Calculator {
    constructor(public value: number = 0) {}
    add(value: number) {
        this.value += value;
        return this;
    }
    multiply(value: number) {
        this.value *= value;
        return this;
    }
}

let calc = new Calculator();
let result = calc.add(1).add(2).multiply(3).multiply(4).value;
console.log(result); // (0 + 1 + 2) * 3 * 4 = 36
