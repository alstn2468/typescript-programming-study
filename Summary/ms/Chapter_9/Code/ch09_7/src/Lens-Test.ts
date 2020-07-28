import * as R from 'ramda';
import { makeLens, getter, setter, setterUsingFunc } from './Lens';
import { IPerson, makeRandomIPerson } from './model/person';

const nameLens = makeLens('name');
const getName = getter(nameLens);
const setName = setter(nameLens);
const setNameUsingFunc = setterUsingFunc(nameLens);

const person: IPerson = makeRandomIPerson();

const name = getName(person);
const newPerson = setName('Albert Einstein')(person);
const anotherPerson = setNameUsingFunc((name) => `Mr. ${name}`)(person);
const capitalPerson = setNameUsingFunc(R.toUpper)(person);

console.log(name); // Landon Jackson
console.log(getName(newPerson)); // Albert Einstein
console.log(getName(anotherPerson)); // Mr. Landon Jackson
console.log(getName(capitalPerson)); // LANDON JACKSON
