Promise.resolve(1).then((value) => console.log(value)); // 1

Promise.resolve("Hello").then((value) => console.log(value)); // Hello

Promise.resolve([1, 2, 3]).then((value) => console.log(value)); // [1, 2, 3]

Promise.resolve({ name: "Jack", age: 32 }).then((value) => console.log(value)); // { name: 'Jack', age: 32 }
