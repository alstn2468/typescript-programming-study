import { zip } from "../utils";
import { makeFakeData, IFake } from "../fake";

const data = makeFakeData();
const keys = Object.keys(data),
    values = Object.values(data);

const fake: IFake = zip(keys, values) as IFake;
console.log(fake);
// {
//     name: 'Antonio Mendez',
//     email: 'ni@pawruric.gu',
//     profession: 'Human Resources Manager',
//     birthday: 1996-11-13T04:02:05.320Z,
//     sentence: 'If fu boz ji cu ihubiuh sajowna nukafih sefas cizet kisukce pakucugo zep nam owivam vav.'
//  }
