export interface IVehicleTariff {
    year: number;
}

export interface IVehicleTariffs {
    [name: string] : IVehicleTariff
}

export interface IVehicle {
    mark: string;
    model: string;
    tariffs: IVehicleTariffs;
}

export interface IResponse {
    cars: Array<IVehicle>;
    tariffs_list: Array<string>;
}