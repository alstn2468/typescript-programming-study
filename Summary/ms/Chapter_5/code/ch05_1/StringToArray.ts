const split = (str: string, delim: string = ""): string[] => str.split(delim);

console.log(split("Hello")); // [ 'H', 'e', 'l', 'l', 'o' ]
console.log(split("H_e_l_l_o", "_")); // [ 'H', 'e', 'l', 'l', 'o' ]

const join = (strArray: string[], delim: string = ""): string =>
    strArray.join(delim);

console.log(join(["H", "e", "l", "l", "o"])); // Hello
console.log(join(["H", "e", "l", "l", "o"], "_")); // H_e_l_l_o
