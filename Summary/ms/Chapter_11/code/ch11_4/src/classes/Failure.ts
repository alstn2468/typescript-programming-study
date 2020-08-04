import { IValidation } from "./IValidation";
import { IApplicative } from "../interfaces";

export class Failure<T> implements IValidation<T>, IApplicative<T> {
    constructor(
        public value: T[],
        public isSuccess = false,
        public isFailure = true
    ) {}

    static of<U>(value: U[]): Failure<U> {
        return new Failure<U>(value);
    }

    map(fn) {
        return new Failure<T>(fn(this.value));
    }

    ap(b) {
        return b.isFailure ? new Failure<T>([...this.value, ...b.value]) : this;
    }
}
