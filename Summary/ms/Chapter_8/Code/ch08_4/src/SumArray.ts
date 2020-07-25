import { reduce } from './Reduce';

const sum = (result, value) => result + value;

export const sumArray = reduce(sum, 0);
