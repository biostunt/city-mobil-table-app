import TYPE from './types';
import { IOutputState, initialState } from './state'
import { IOutputAction } from './actions';

const reducer = (state: IOutputState = initialState, {type, payload}: IOutputAction) => {
    switch (type) {
        case TYPE.ON_VEHICLE_CHOOSED:
            return { ...state, vehicle: payload };
        default:
            return { ...state };
    }
}

export default reducer;