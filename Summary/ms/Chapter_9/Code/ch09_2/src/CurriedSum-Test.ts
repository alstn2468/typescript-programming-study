import { curriedSum } from "./CurriedSum";

console.log(curriedSum()); // [Function]
console.log(curriedSum(1)); // [Function]
console.log(curriedSum(1)(2)); // [Function]
console.log(curriedSum(1)(2)(3)); // [Function]
console.log(curriedSum(1)(2)(3)(4)); // 10
