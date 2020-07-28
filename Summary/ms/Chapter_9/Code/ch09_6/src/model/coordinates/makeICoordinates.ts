import { ICoordinates } from "./ICoordinates";

export const makeICoordinates = (
    latitude: number,
    longtitude: number
): ICoordinates => ({ latitude, longtitude });
