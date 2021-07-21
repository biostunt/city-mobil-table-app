import { SearchState } from "./search";
import {IOutputState} from './output'

export interface IStoreState {
    search: SearchState;
    output: IOutputState;
}