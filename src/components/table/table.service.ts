import { IVehicleTariffs } from "../../api/cars";

/**
 * Creates array of header elements
 * @param tarrifs Avaiable service tarrifs 
 * @returns Array with first element as "mark and model of vehicle" 
 */
export const getTableHeaderElements = (tarrifs: Array<string>): Array<string> => ['Марка и модель', ...tarrifs];


export const getVehicleTariffsColumns = (tarrifs: Array<string>, vehicle: IVehicleTariffs): Array<string> => {
    const columns = tarrifs.map(e => '-');
    for (const [key, value] of Object.entries(vehicle)) {
        columns[tarrifs.findIndex((elem) => elem === key)] = `${value.year}`;
    }
    return columns;
}
        