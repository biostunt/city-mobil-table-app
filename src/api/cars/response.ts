export interface IVehicleTarrif {
    year: number;
}

export interface IVehicle {
    mark: string;
    model: string;
    tarrifs: Array<IVehicleTarrif>;
}

export interface IResponse {
    cars: Array<IVehicle>;
    tariffs_list: Array<string>;
}