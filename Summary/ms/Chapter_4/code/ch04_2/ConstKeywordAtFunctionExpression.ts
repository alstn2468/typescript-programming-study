let f = () => {};
f();

f = () => {
    console.log("Hello");
};
f(); // Hello

const c = () => {};

// c = () => {
//     console.log("Hello");
// };
