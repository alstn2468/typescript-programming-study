import { ILocation } from "../location";

export type IPerson = {
    name: string;
    age: number;
    title?: string;
    location?: ILocation;
};

export { ILocation };
