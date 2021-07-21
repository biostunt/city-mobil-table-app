import { IVehicle } from "../../api/cars";

export interface IOutputState {
    vehicle: IVehicle | null;
}

export const initialState: IOutputState = {
    vehicle: null
}