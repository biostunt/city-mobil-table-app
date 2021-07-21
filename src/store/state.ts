import { SearchState } from "./search";
import {IOutputState} from './output'
import { OrderState } from "./order";

export interface IStoreState {
    search: SearchState;
    output: IOutputState;
    order: OrderState;
}