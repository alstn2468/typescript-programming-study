import { Nothing } from "../classes/Nothing";
import { Just } from "../classes/Just";

console.log(Nothing.of().isJust()); // false
console.log(Nothing.of().isNothing()); // true
console.log(Nothing.of().getOrElse(1)); // 1
console.log(
    Nothing.of()
        .map((x) => x + 1)
        .getOrElse(1)
); // 1
console.log(Nothing.of().ap(1).getOrElse(1)); // 1
console.log(Nothing.of().chain(Just.of).getOrElse(1)); // 1
