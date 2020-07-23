import { test1 } from './ArrowAsyncAwait';
import { test2 } from './FunctionAsyncAwait';

test1().then(() => test2());
