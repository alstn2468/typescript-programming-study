type MapFunc<T, R> = (T) => R;
type IdentityFunc<T> = MapFunc<T, T>;

const numberIdentity: IdentityFunc<number> = (x: number): number => x;
const stringIdentity: IdentityFunc<string> = (x: string): string => x;
const objectIdentity: IdentityFunc<object> = (x: object): object => x;
const arrayIdentity: IdentityFunc<any[]> = (x: any[]): any[] => x;
