import { IValuable, Valuable } from "./Valuable";

export const printValueT = <Q, T extends IValuable<Q>>(o: T): void =>
    console.log(o.value);
export { IValuable, Valuable };
