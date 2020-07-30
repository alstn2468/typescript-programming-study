import { printValueT } from "./printValueT";
import { Valuable } from "./Valuable";

printValueT(new Valuable(1)); // 1
printValueT({ value: true }); // true
