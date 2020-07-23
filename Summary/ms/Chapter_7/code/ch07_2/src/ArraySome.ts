const isAnyTrue = (values: boolean[]) => values.some((value) => value === true);

console.log(isAnyTrue([false, true, false])); // true
console.log(isAnyTrue([false, false, false])); // false
