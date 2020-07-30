import { calcArea } from "./calcArea";
import { IRectangle, ISquare, ICircle } from "./IShape";

const square: ISquare = { tag: "square", size: 10 };
const rectangle: IRectangle = { tag: "rectangle", width: 4, height: 5 };
const circle: ICircle = { tag: "circle", radius: 10 };

console.log(calcArea(square)); // 100
console.log(calcArea(rectangle)); // 20
console.log(calcArea(circle)); // 314.1592653589793
