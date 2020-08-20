import { IFake, makeFakeData } from "../fake/makeFakeData";

const data: IFake = makeFakeData();

const keys = Object.keys(data);
console.log("keys :", keys);
// keys : [ 'name', 'email', 'profession', 'birthday', 'sentence' ]

const values = Object.values(data);
console.log("values :", values);
// values : [
//   'Harriet Carpenter',
//   'jumibe@mono.tf',
//   'Security Director',
//   1968-04-06T22:39:20.764Z,
//   'Muz uw veglivun ho metbifi ta su vefniiw bif wolawi lervimba weogjo al aluko vudatzur.'
// ]
