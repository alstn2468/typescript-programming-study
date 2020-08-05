import { IO } from "../classes/IO";
import * as R from "ramda";

const work1 = () => ({ name: "Jack" });
const work2 = (obj) => () => ({ age: 32, ...obj });

const obj = IO.of(work1)
    .chain((obj: object) => IO.of(work2(obj)))
    .runIO();
console.log(obj); // { age: 32, name: 'Jack' }
