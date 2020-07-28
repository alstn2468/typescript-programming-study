import * as R from 'ramda';
import { IPerson, makeRandomIPerson } from './model/person';

const getName = R.pipe(
    R.prop('name'),
    R.tap((name) => console.log(name))
);

const person: IPerson = makeRandomIPerson();
const originalName = getName(person); // Hester Lawson

const modifiedPerson = R.assoc('name', 'Albert Einstein')(person);
const modifiedName = getName(modifiedPerson); // Albert Einstein
