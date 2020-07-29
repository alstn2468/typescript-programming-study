import { ICoordinates } from "../coordinates";

export type ILocation = {
    country: string;
    city?: string;
    address?: string;
    coordinates?: ICoordinates;
};
