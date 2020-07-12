export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
    let result: T[] = [];
    for (let index = 0; index < arrays.length; index++) {
        const array: T[] = arrays[index];
        result = [...result, ...array];
    }
    return result;
};

const mergeArray1: string[] = mergeArray(['Hello'], ['World']);
console.log(mergeArray1); // [ "Hello", "World" ]

const mergeArray2: number[] = mergeArray([1], [2, 3], [4, 5, 6], [7, 8, 9, 10]);
console.log(mergeArray2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
