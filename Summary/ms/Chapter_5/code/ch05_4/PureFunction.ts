function pure(a: number, b: number): number {
    return a + b;
}

function impure1(array: number[]): void {
    array.push(1);
    array.splice(0, 1);
}

let g = 10;
function impure2(x: number) {
    return x + g;
}
