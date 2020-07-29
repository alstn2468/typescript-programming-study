import * as R from "ramda";
import { IPerson, makeRandomIPerson } from "./model/person";

const person: IPerson = makeRandomIPerson();
const pairs: [string, any][] = R.toPairs(person);
console.log("pairs :", pairs);
// pairs : [
//     ['name', 'Beatrice Pierce'],
//     ['age', 44],
//     ['title', 'Gerontologist'],
//     [
//         'location',
//         {
//             country: 'KY',
//             city: 'Dafwufur',
//             address: '1915 Pefob Way',
//             coordinates: [Object]
//         }
//     ]
// ]
