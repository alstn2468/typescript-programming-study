import { IValuable, Valuable } from "./Valuable";

export const printValue = <T>(o: IValuable<T>): void => console.log(o.value);
export { IValuable, Valuable };
