import { IVehicle } from '../../api/cars';
import TYPE from './types';

export interface IOutputAction {
    type: string;
    payload: IVehicle
}

const onVehicleChoosed = (vehicle: IVehicle) => ({ type: TYPE.ON_VEHICLE_CHOOSED, payload: vehicle });

export const outputActions = {
    onVehicleChoosed
}