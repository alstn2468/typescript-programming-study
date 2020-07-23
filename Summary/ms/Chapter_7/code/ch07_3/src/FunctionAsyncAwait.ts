export async function test2() {
    let value = await 'hello';
    console.log(value); // hello

    value = await Promise.resolve('hello');
    console.log(value); // hello
}
