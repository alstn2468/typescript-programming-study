const arrayLength = <T>(array: T[]): number => array.length;
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0;

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

type IPerson = { name: string; age?: number };
let personArray: IPerson[] = [{ name: 'Jack' }, { name: 'Jane', age: 32 }];

console.log(arrayLength(numArray)); // 3
console.log(arrayLength(strArray)); // 2
console.log(arrayLength(personArray)); // 2
console.log(isEmpty([])); // true
console.log(isEmpty([1])); // false
