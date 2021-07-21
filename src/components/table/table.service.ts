import { IVehicleTariffs } from "../../api/cars";

/**
 * Creates array of header elements
 * @param tarrifs Avaiable service tariffs 
 * @returns Array with first element as "mark and model of vehicle" 
 */
export const getTableHeaderElements = (tarrifs: Array<string>): Array<string> => ['Марка и модель', ...tarrifs];

/**
 * Generates columns for table element based on abaiable tariffs and tariffs that provides vehicle
 * @param tarrifs Avaiable tariffs
 * @param vehicle Tariffs that provides vehicle
 * @returns Array of avaiable tarrifs size that includes vehicle tariffs
 */
export const getVehicleTariffsColumns = (tarrifs: Array<string>, vehicle: IVehicleTariffs, defaultValue: string = '-'): Array<string> => {
    const columns = tarrifs.map(e => defaultValue);
    for (const [key, value] of Object.entries(vehicle)) {
        columns[tarrifs.findIndex((elem) => elem === key)] = `${value.year}`;
    }
    return columns;
}

/**
 * Clamps value and returns fixed value if it out of borders
 * @deprecated there is no required to use it anymore
 * @param value Value to check
 * @param min Left border
 * @param max Right border
 * @returns Fixed value
 */
export const clampValue = (value: number, min: number, max: number): number => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}
        