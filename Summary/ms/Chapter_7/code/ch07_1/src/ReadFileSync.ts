import { readFileSync } from "fs";

const buffer: Buffer = readFileSync("./package.json");
const content: string = buffer.toString();
console.log(content);
