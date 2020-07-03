let add = new Function("a", "b", "return a + b");
let result = add(1, 2);
console.log(result); // 3

let add2 = function (a, b) {
    return a + b;
};
console.log(add2(1, 2)); // 3
