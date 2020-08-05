import { IO } from "../classes/IO";

const work = (a: number, b: number) => a + b;
const result = IO.of(work).runIO(1, 2);
console.log(result); // 3
