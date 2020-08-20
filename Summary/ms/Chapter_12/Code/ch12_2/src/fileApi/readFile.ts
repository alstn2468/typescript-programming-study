import * as fs from "fs";

export const readFile = (filename: string): Promise<any> =>
    new Promise<any>((resolve, reject) => {
        fs.readFile(filename, "utf8", (error: Error, data: any) => {
            error ? reject(error) : resolve(data);
        });
    });
