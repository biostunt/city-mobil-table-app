import TYPE from './types';

export interface IOrderAction {
    type: string;
    payload: string;
}

const onOrderByChanged = (name: string): IOrderAction => ({ type: TYPE.ON_ORDER_BY_CHANGED, payload: name });
const onOrderTypeChanged = (type: string): IOrderAction => ({ type: TYPE.ON_ORDER_TYPE_CHANGED, payload: type });

export const orderActions = {
    onOrderByChanged, onOrderTypeChanged
}