import { FirstOrderFunc } from "./FunctionSignature";

export const inc: FirstOrderFunc<number, number> = (x: number): number => x + 1;
