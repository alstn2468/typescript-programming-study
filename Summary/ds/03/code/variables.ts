let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

//type and value is same
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

let colors: string[] = ["Red", "Green", "Blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function 
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}