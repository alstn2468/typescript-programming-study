type NumberToNumberFunc = (number) => number;

export const f = (a: number, b: number, c: number): NumberToNumberFunc => (
    x: number
): number => a * x ** 2 + b * x + c;
