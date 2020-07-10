const identity = <T>(n: T): T => n;
console.log(identity<boolean>(true)); // true
console.log(identity(true)); // true
