import { writeCsvFormatFakeData } from "./fake";
import { getFileNameAndNumber } from "./utils/getFileNameAndNumber";

const [filename, numberOfFakeData] = getFileNameAndNumber("./data/fake", 1);
const csvFileName = `${filename}-${numberOfFakeData}.csv`;

writeCsvFormatFakeData(csvFileName, numberOfFakeData)
    .then((result) => console.log(result))
    .catch((e: Error) => console.log(e.message));
