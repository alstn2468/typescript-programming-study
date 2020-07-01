import INameable from './INameable';

let obj: object = { name: 'Jack' };

let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;

console.log(name1, name2); // Jack Jack
