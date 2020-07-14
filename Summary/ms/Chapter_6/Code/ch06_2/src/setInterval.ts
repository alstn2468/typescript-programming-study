const period = 1000;
let count = 0;

console.log("Program started...");

const id = setInterval(() => {
    if (count >= 3) {
        clearInterval(id);
        console.log("Program finished...");
    } else {
        console.log(++count);
    }
}, period);
