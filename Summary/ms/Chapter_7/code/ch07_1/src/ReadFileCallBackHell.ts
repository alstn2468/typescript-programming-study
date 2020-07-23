import { readFile } from "fs";

readFile("./package.json", (err: Error, buffer: Buffer) => {
    if (err) {
        throw err;
    } else {
        const content: string = buffer.toString();
        console.log(content);

        readFile("./tsconfig.json", (err: Error, buffer: Buffer) => {
            if (err) {
                throw err;
            } else {
                const content: string = buffer.toString();
                console.log(content);
            }
        });
    }
});
