import { fileExists } from "../fileApi/fileExists";

const exists = async (filePath) => {
    const result = await fileExists(filePath);
    console.log(`${filePath} ${result ? "exists" : "not exists"}`);
};

exists("./package.json"); // ./package.json exists
exists("./package"); // ./package not exists
