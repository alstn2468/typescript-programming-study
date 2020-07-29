import * as R from "ramda";
import { makeRandomIPerson, IPerson } from "./model/person";

const originalPerson: IPerson = makeRandomIPerson();
const keys: string[] = R.keys(originalPerson);
const values: any[] = R.values(originalPerson);
const zippedPerson: IPerson = R.zipObj(keys, values) as IPerson;

console.log("originalPerson :", originalPerson, "zippedPerson :", zippedPerson);
// originalPerson: {
//     name: 'Vincent Stevens',
//         age: 21,
//             title: 'Land Developer',
//                 location: {
//         country: 'NE',
//             city: 'Domidgek',
//                 address: '1856 Gulsor Grove',
//                     coordinates: { latitude: 13.85609, longitude: -1.41191 }
//     }
// } zippedPerson: {
//     name: 'Vincent Stevens',
//         age: 21,
//             title: 'Land Developer',
//                 location: {
//         country: 'NE',
//             city: 'Domidgek',
//                 address: '1856 Gulsor Grove',
//                     coordinates: { latitude: 13.85609, longitude: -1.41191 }
//     }
// }
