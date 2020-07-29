import * as R from "ramda";
import { IPerson, makeRandomIPerson } from "./model/person";

const dispalyPersons = (prefix: string) =>
    R.pipe(
        R.map((person: IPerson) => ({ name: person.name, age: person.age })),
        R.tap((o) => console.log(prefix, o))
    ) as any;

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson);
const nameSortedPersons = R.sortWith([R.descend(R.prop("name"))])(persons);

dispalyPersons("Sorted by name :")(nameSortedPersons);
// Sorted by name: [
//     { name: 'Gilbert Terry', age: 49 },
//     { name: 'Gary Wagner', age: 23 },
//     { name: 'Eugenia French', age: 41 },
//     { name: 'Ada Perez', age: 60 }
// ]
