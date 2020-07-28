import * as R from 'ramda';
import { getter, setter, setterUsingFunc } from './Lens';
import { IPerson, makeRandomIPerson } from './model/person';

const longitudeLens = R.lensPath(['location', 'coordinates', 'longitude']);
const getLongitude = getter(longitudeLens);
const setLongitude = setter(longitudeLens);
const setLongitudeUsingFunc = setterUsingFunc(longitudeLens);

const person: IPerson = makeRandomIPerson();

const longitude = getLongitude(person);
const newPerson = setLongitude(0.1234567)(person);
const anotherPerson = setLongitudeUsingFunc(R.add(0.1234567))(person);

console.log(longitude); // 34.43953
console.log(getLongitude(newPerson)); // 0.1234567
console.log(getLongitude(anotherPerson)); // 34.562986699999996
