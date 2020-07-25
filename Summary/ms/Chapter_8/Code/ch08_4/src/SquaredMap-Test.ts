import { pipe } from './Pipe';
import { squaredMap } from './SquaredMap';

const fourSquare = pipe(squaredMap, squaredMap);
console.log(fourSquare([3, 4])); // [ 81, 256 ]
