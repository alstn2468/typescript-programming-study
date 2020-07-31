import { IValuable } from "./IValuable";
import { IFunctor } from "./IFunctor";

export class Some<T> implements IValuable<T>, IFunctor<T> {
    constructor(private value: T) {}
    getOrElse(defalutValue: T) {
        return this.value ?? defalutValue;
    }
    map<U>(fn: (T) => U) {
        return new Some<U>(fn(this.value));
    }
}
