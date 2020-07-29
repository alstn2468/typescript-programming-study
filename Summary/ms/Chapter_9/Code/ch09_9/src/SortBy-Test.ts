import * as R from "ramda";
import { IPerson, makeRandomIPerson } from "./model/person";

const dispalyPersons = (prefix: string) =>
    R.pipe(
        R.map((person: IPerson) => ({ name: person.name, age: person.age })),
        R.tap((o) => console.log(prefix, o))
    ) as any;

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson);
const nameSortedPersons = R.sortBy(R.prop("name"))(persons);
const ageSortedPersons = R.sortBy(R.prop("age"))(persons);

dispalyPersons("Sorted by name :")(nameSortedPersons);
// Sorted by name : [
//     { name: 'Catherine Colon', age: 60 },
//     { name: 'Cody McGuire', age: 41 },
//     { name: 'Millie Jackson', age: 58 },
//     { name: 'Sara Gordon', age: 43 }
// ]
dispalyPersons("Sorted by age :")(ageSortedPersons);
// Sorted by age : [
//     { name: 'Cody McGuire', age: 41 },
//     { name: 'Sara Gordon', age: 43 },
//     { name: 'Millie Jackson', age: 58 },
//     { name: 'Catherine Colon', age: 60 }
// ]
