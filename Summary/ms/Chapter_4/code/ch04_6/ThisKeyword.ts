function functionKeyword() {
    console.log(this);
}
const arrowFunction = () => console.log(this);

console.log('At function keyword');
functionKeyword();
console.log('At arrow function');
arrowFunction();
