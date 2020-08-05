import { IO } from "../classes/IO";

const work = () => {
    console.log("work called...");
    return { name: "Jack", age: 32 };
};
const result = IO.of(work).runIO();
console.log(result); // { name: "Jack", age: 32 }
