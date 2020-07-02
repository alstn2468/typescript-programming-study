function fn(arg1: string, arg?: number): void {
    console.log(`arg: ${arg}`);
}

fn("Hello", 1); // arg: 1
fn("Hello"); // arg: undefined
