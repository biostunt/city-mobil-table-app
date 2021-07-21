import TYPE from './types';
import { OrderState, initialState } from './state'
import { IOrderAction } from './actions';


const reducer = (state: OrderState = initialState, { type, payload }: IOrderAction) : OrderState => {
    switch (type) {
        case TYPE.ON_ORDER_BY_CHANGED:
            return { ...state, orderBy: payload };
        case TYPE.ON_ORDER_TYPE_CHANGED:
            return { ...state, orderType: payload };
        default:
            return { ...state };
    }
}

export default reducer;