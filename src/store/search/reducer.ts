import TYPE from './types';
import { ISearchAction } from './actions'
import { initialState, SearchState } from './state';


const reducer = (state: SearchState = initialState, {type, payload}: ISearchAction) => {
    switch (type) {
        case TYPE.ON_INPUT_CHANGED:
            return { ...state, value: payload };
        default:
            return { ...state };
    }
}

export default reducer;