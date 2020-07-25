import { f, g, h } from './FunctionComposition';
import { pipe } from './Pipe';

const piped = pipe(f, g, h);
console.log(piped('x')); // h(g(f(x)))
