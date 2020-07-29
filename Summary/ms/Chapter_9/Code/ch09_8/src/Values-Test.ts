import * as R from "ramda";
import { makeRandomIPerson } from "./model/person";

const values: any[] = R.values(makeRandomIPerson());
console.log("values :", values);
// values : [
//     'Shane Lawson',
//     31,
//     'IT Architect',
//     {
//         country: 'AU',
//         city: 'Hegjedzi',
//         address: '690 Etvul Manor',
//         coordinates: { latitude: 80.53795, longitude: -117.13029 }
//     }
// ]
