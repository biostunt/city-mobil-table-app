import TYPE from "./types";

export interface ISearchAction {
    type: string;
    payload: string;
}
const onInputChanged = (text: string): ISearchAction => ({ type: TYPE.ON_INPUT_CHANGED, payload: text });

export const searchActions = {
    onInputChanged,
}