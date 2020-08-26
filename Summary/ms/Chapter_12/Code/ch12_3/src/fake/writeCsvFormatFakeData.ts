import * as path from "path";
import { IFake, makeFakeData } from "./makeFakeData";
import { mkdir, writeFile, appendFile } from "../fileApi";
import { range } from "../utils/range";

export const writeCsvFormatFakeData = async (
    filename: string,
    numberOfItems: number
): Promise<string> => {
    const dirname = path.dirname(filename),
        comma = ",",
        newLine = "\n";
    await mkdir(dirname);

    for (let n of range(numberOfItems)) {
        const fake: IFake = makeFakeData();

        if (n == 0) {
            const keys = Object.keys(fake).join(comma);
            await writeFile(filename, keys);
        }

        const values = Object.values(fake).join(comma);
        await appendFile(filename, newLine + values);
    }

    return `write ${numberOfItems} items to ${filename} file.`;
};
