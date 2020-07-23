const isAllTrue = (values: boolean[]) =>
    values.every((value) => value === true);

console.log(isAllTrue([true, true, true])); // true
console.log(isAllTrue([false, true, true])); // false
