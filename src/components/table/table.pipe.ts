import { IVehicle } from "../../api/cars"


interface IVehicleWithIndex extends IVehicle {
    id: number;
} 

/**
 * Indexates all elements in array
 * @param vehicles Array with vehicles info
 * @returns Array with indexed elements 
 */
export const indexArrayElements = (vehicles: Array<IVehicle>): Array<IVehicleWithIndex> => vehicles.map((e, i) => ({ ...e, id: i }));

/**
 * Filter array by search string
 * @param vehicles Array with vehicles info extended with id
 * @param searchLine Search string
 * @returns Filtered array
 */
export const pipeBySearch = (vehicles: Array<IVehicleWithIndex>, searchLine: string): Array<IVehicleWithIndex> => {
    searchLine = searchLine.toLocaleLowerCase();
    return vehicles.filter((veh, i) => {
        let isFit = false;
        let vehName: string = `${veh.mark} ${veh.model}`.toLocaleLowerCase();
        let years = Object.entries(veh.tariffs).map(([key, value]) => `${value.year}`);
        isFit = isFit || vehName.includes(searchLine);
        isFit = isFit || years.filter((year) => year.includes(searchLine)).length > 0;
        return isFit;
    })
}

/**
 * Order array elements
 * @param vehicles Array with vehicles info extended with id
 * @param orderBy Property by which to group array
 * @param orderType Property that show ordering direction
 * @returns Ordered array 
 */
export const pipeByOrder = (vehicles: Array<IVehicleWithIndex>, orderBy: string, orderType: string): Array<IVehicleWithIndex> => {
    if (!orderBy.length || !orderType.length) return vehicles;
    
    const orderByName = (v1: IVehicleWithIndex, v2: IVehicleWithIndex): number => {
        let name1 = `${v1.mark} ${v1.model}`;
        let name2 = `${v2.mark} ${v2.model}`;
        if (orderType === 'asc') return name1.localeCompare(name2);
        else return name2.localeCompare(name1);
    }
    
    const orderByTariff = (v1: IVehicleWithIndex, v2: IVehicleWithIndex): number => {
        if (!v1.tariffs[orderBy]) return orderType === 'asc' ? 1 : -1;
        if (!v2.tariffs[orderBy]) return orderType === 'asc' ? -1 : 1;
        return orderType === 'asc' ?
            v1.tariffs[orderBy].year - v2.tariffs[orderBy].year
            : v2.tariffs[orderBy].year - v1.tariffs[orderBy].year;
    }
    return vehicles.sort(orderBy === 'name' ? orderByName : orderByTariff);
}

/**
 * run array through 2 pipes.
 * pipeByOrder -> pipeBySearch -> out
 * @param vehicles Array with vehicles info
 * @param searchLine Search string
 * @param orderBy Property by which to group array
 * @param orderType Property that show ordering direction
 * @returns filtered array with vehicle info extended with id
 */
const pipeVehicleInformation = (vehicles: Array<IVehicle>, searchLine: string, orderBy: string, orderType: string): Array<IVehicleWithIndex> => {
    let indexedVehicles = indexArrayElements(vehicles);
    let groupedElements = pipeByOrder(indexedVehicles, orderBy, orderType);
    let filteredElements = pipeBySearch(groupedElements, searchLine);
    return filteredElements;
}

export default pipeVehicleInformation;