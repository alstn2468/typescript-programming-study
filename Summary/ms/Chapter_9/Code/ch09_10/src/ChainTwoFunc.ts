export const chainTwoFunc = (firstFn, secondFn) => (x) =>
    firstFn(secondFn(x), x);
