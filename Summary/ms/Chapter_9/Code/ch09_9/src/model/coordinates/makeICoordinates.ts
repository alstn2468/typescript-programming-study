import { ICoordinates } from './ICoordinates';

export const makeICoordinates = (
    latitude: number,
    longitude: number
): ICoordinates => ({ latitude, longitude });
