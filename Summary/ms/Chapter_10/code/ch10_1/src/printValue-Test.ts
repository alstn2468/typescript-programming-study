import { printValue, Valuable } from "./PrintValue";

printValue(new Valuable<number>(1)); // 1
printValue(new Valuable<boolean>(true)); // true
printValue(new Valuable<string>("hello")); // hello
printValue(
    new Valuable<number[]>([1, 2, 3])
); // [ 1, 2, 3 ]
