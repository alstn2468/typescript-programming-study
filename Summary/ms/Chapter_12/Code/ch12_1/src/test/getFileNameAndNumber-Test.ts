import { getFileNameAndNumber } from "../utils/getFileNameAndNumber";

const [fileName, numberOfFakeItems] = getFileNameAndNumber(
    "data/fake.csv",
    100000
);
console.log(fileName, numberOfFakeItems); // data/fake.csv 100000
