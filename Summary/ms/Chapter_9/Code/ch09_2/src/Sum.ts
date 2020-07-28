export const sum = (...numbers: number[]): number =>
    numbers.reduce((result: number, sum: number) => result + sum, 0);
