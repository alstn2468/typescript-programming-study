import {
    FirstOrderFunc,
    SecondOrderFunc,
    ThirdOrderFunc,
} from "./FunctionSignature";

export const add3: ThirdOrderFunc<number, number> = (
    x: number
): SecondOrderFunc<number, number> => (
    y: number
): FirstOrderFunc<number, number> => (z: number): number => x + y + z;
