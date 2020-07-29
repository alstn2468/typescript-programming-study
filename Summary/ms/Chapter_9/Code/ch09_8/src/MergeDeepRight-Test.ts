import * as R from "ramda";
import { IPerson, makeRandomIPerson } from "./model/person";
import { ILocation, makeRandomILocation } from "./model/location";
import { ICoordinates, makeRandomICoordinates } from "./model/coordinates";

const person: IPerson = makeRandomIPerson();
const location: ILocation = makeRandomILocation();
const coordinates: ICoordinates = makeRandomICoordinates();

const newLocation = R.mergeDeepRight(location, { coordinates });
const newPerson = R.mergeDeepRight(person, { location: newLocation });

console.log("person :", person);
console.log("newPerson :", newPerson);
// person : {
//     name: 'Georgie Doyle',
//         age: 39,
//             title: 'Computer Programmer',
//                 location: {
//         country: 'MD',
//             city: 'Nukaven',
//                 address: '1958 Uscu Plaza',
//                     coordinates: { latitude: -17.70018, longitude: -60.19292 }
//     }
// }
// newPerson : {
//     name: 'Georgie Doyle',
//         age: 39,
//             title: 'Computer Programmer',
//                 location: {
//         country: 'GH',
//             city: 'Majuig',
//                 address: '1398 Vougo Park',
//                     coordinates: { latitude: -31.62073, longitude: -85.10003 }
//     }
// }
