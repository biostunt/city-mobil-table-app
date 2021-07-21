import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import {storeReducers} from './reducers'
export { storeActions } from './actions'
export type { IStoreState } from './state'

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    typeof action == "function" ?
        action(store.dispatch, store.getState) : next(action);
}

const combinedReducers = combineReducers(storeReducers);
const Store = createStore(combinedReducers, applyMiddleware(loggerMiddleware, logger));

export default Store;