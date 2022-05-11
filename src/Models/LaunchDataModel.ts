import { VelocityModel } from './VelocityModel';

export interface LaunchDataModel {
    velocity: VelocityModel[],
    altitude: number,
    temperature: number,
    goingUp: boolean,
    statusMessage: string,
}

export const launchDataModelInitial = {
    velocity: [],
    altitude: 0,
    temperature:0,
    goingUp: false,
    statusMessage: '',
};