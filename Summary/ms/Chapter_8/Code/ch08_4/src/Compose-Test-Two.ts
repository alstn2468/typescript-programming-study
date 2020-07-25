import { compose } from './Compose';

const inc = (x: number): number => x + 1;

const composed = compose(inc, inc, inc);
console.log(composed(1)); // 4
