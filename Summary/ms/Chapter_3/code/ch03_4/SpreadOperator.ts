let coord = { ...{ x: 0 }, ...{ y: 0 } };
console.log(coord);

let part1 = { name: "Jane" };
let part2 = { age: 22 };
let part3 = { city: "Seoul", country: "Kr" };
let merged = {
    ...part1,
    ...part2,
    ...part3,
};

console.log(merged);
