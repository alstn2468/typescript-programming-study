import { pipe } from './Pipe';
import { squaredMap } from './SquaredMap';
import { sumArray } from './SumArray';

const pitagoras = pipe(squaredMap, sumArray, Math.sqrt);

console.log(pitagoras([3, 4])); // 5
