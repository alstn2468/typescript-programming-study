const asyncReturn = async () => {
    return [1, 2, 3];
};

asyncReturn().then((value) => console.log(value)); // [1, 2, 3]
console.log(asyncReturn());
