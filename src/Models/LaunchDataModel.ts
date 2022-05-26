import { VelocityModel } from './VelocityModel';
export interface LaunchDataModel {
    Velocity: VelocityModel[],
    Altitude: number,
    Temperature: number,
    GoingUp: boolean,
    StatusMessage: string,
}

export const launchDataModelInitial = {
    Velocity: [],
    Altitude: 0,
    Temperature: 0,
    GoingUp: false,
    StatusMessage: '',
};