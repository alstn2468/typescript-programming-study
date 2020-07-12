export const pureDelete = <T>(
    array: readonly T[],
    cb: (val: T, index?: number) => boolean
): T[] => array.filter((val, index) => cb(val, index) == false);

const mixedArray: object[] = [
    [],
    { name: 'Jack' },
    { name: 'Jane', age: 32 },
    ['description'],
];
const objectsOnly: object[] = pureDelete(mixedArray, (val) =>
    Array.isArray(val)
);
console.log(mixedArray); // [ [], { name: 'Jack' }, { name: 'Jane', age: 32 }, [ 'description' ] ]
console.log(objectsOnly); // [ { name: 'Jack' }, { name: 'Jane', age: 32 } ]
