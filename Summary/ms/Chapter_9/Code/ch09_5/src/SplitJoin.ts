import * as R from "ramda";

const words: string[] = R.split(" ")("Hello world!, I'm Peter.");
console.log(words); // [ 'Hello', 'world!,', "I'm", 'Peter.' ]
console.log(R.join(" ")(words)); // Hello world!, I'm Peter.
