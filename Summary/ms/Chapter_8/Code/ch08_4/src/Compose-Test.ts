import { f, g, h } from './FunctionComposition';
import { compose } from './Compose';

const composedFGH = compose(h, g, f);
console.log(composedFGH('x')); // h(g(f(x)))
