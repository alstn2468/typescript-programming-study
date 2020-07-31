import { Option } from "./Option";
import { IFunctor } from "./IFunctor";
import { IValuable } from "./IValuable";

export const parseJson = <T>(json: string): IValuable<T> & IFunctor<T> => {
    try {
        const value = JSON.parse(json);
        return Option.Some<T>(value);
    } catch (e) {
        return Option.None;
    }
};
