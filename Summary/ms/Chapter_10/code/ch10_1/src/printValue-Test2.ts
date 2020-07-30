import { printValue, Valuable } from "./PrintValue";

printValue(new Valuable(1)); // 1
printValue(new Valuable(true)); // true
printValue(new Valuable("hello")); // hello
printValue(new Valuable([1, 2, 3])); // [ 1, 2, 3 ]
