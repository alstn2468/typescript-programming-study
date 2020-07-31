import { Option } from "./Option";
import { IFunctor } from "./IFunctor";
import { IValuable } from "./IValuable";

export const parseNumber = (
    n: string
): IFunctor<number> & IValuable<number> => {
    const value = parseInt(n);

    return isNaN(value) ? Option.None : Option.Some(value);
};
