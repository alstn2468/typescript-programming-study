import { IPerson, makeRandomIPerson } from "./model/person";

const person: IPerson = makeRandomIPerson();
console.log(person);
// {
//   name: 'Esther Benson',
//   age: 31,
//   title: 'Executive Assistant',
//   location: {
//     country: 'SK',
//     city: 'Mobipev',
//     address: '1058 Jenfog Grove',
//     coordinates: { latitude: 12.09187, longtitude: -174.44386 }
//   }
// }
