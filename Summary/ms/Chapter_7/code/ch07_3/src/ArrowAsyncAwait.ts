export const test1 = async () => {
    let value = await 1;
    console.log(value); // 1

    value = await Promise.resolve(1);
    console.log(value); // 1
};
