import { createRangeIterable } from './CreateRangeIterable';

const iterator = createRangeIterable(1, 3 + 1);

while (true) {
    const { value, done } = iterator.next();
    if (done) {
        break;
    }
    console.log(value);
}
