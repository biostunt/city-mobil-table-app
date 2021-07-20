import {IResponse} from './response'
import {executeGetRequest} from '../api.service'

export const getVehiclesInformation = (onSuccess: (res: IResponse) => any, onError?: (err: any) => any) => {
    executeGetRequest("https://city-mobil.ru/api/cars")
        .then((res: IResponse) => onSuccess(res))
        .catch(err => onError ? onError(err) : console.log(err));
}