import { readFileSync, readFile } from "fs";

console.log("Read package.json using synchronous api...");
const buffer: Buffer = readFileSync("./package.json");
console.log(buffer.toString());

readFile("./package.json", (error: Error, buffer: Buffer) => {
    console.log("Read package.json using asynchronous api...");
    console.log(buffer.toString());
});

const readFilePromise = (fileName: string): Promise<string> =>
    new Promise<string>((resolve, reject) => {
        readFile(fileName, (error: Error, buffer: Buffer) => {
            if (error) {
                reject(error);
            }

            resolve(buffer.toString());
        });
    });

(async () => {
    const content = await readFilePromise("./package.json");
    console.log("Read package.json using Promise and async/await...");
    console.log(content);
})();
