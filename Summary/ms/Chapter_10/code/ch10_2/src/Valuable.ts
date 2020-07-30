import { IValuable } from "./IValuable";

export class Valuable<T> implements IValuable<T> {
    constructor(public value: T) {}
}

export { IValuable };
