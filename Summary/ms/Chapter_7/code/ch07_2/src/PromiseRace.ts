Promise.race([Promise.resolve(true), Promise.resolve("Hello")]).then((value) =>
    console.log(value)
);

Promise.race([Promise.resolve(true), Promise.reject(new Error("error"))])
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message));

Promise.race([Promise.reject(new Error("error")), Promise.resolve(true)])
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message));
