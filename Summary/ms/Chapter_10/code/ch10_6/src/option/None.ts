import { nullable } from "./nullable";
import { IValuable } from "./IValuable";
import { IFunctor } from "./IFunctor";

export class None implements IValuable<nullable>, IFunctor<nullable> {
    getOrElse<T>(defalutValue: T | null) {
        return defalutValue;
    }
    map<U>(fn: (T) => U) {
        return new None();
    }
}
