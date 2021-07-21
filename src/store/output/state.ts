export interface IVehicle {
    id: number;
    mark: string;
    model: string;
    year: number;
}

export interface IOutputState {
    vehicle: IVehicle | null;
}

export const initialState: IOutputState = {
    vehicle: null
}