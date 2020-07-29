import * as R from "ramda";
import { IPerson, makeRandomIPerson } from "./model/person";

const pairs: [string, any][] = R.toPairs(makeRandomIPerson());
const person: IPerson = R.fromPairs(pairs) as IPerson;
console.log("person :", person);
// person : {
//     name: 'Katie Andrews',
//         age: 52,
//             title: 'Tax Specialist',
//                 location: {
//         country: 'HT',
//             city: 'Cesobi',
//                 address: '1031 Aredam Point',
//                     coordinates: { latitude: 83.41045, longitude: -78.94807 }
//     }
// }
