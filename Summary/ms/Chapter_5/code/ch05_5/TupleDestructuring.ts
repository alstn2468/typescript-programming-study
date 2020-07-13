import { doSomething } from "./TupleTypeAlias";

const [result, errorMessage] = doSomething();
console.log(result, errorMessage); // false Some error occurs...
