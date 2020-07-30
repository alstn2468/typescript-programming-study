import { create } from "./create";

class Point {
    constructor(public x: number, public y: number) {}
}
[create(Date), create(Point, 0, 0)].forEach((s) => console.log(s));
// 2020-07-30T06:16:53.363Z
// Point { x: 0, y: 0 }
