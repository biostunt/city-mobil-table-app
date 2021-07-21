import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {IStoreState, storeActions} from '../../store'

import style from '../../styles/search.module.css';

const Search = () => {
    
    const value = useSelector((state: IStoreState) => state.search.value);
    const dispatch = useDispatch();
    const input = useRef<HTMLInputElement>(null);

    const onChange = () => dispatch(storeActions.search.onInputChanged(input?.current?.value || ""));

    return <div className={style.container}>
        <div className={style.search_area}>
            <input ref={input} placeholder='Поиск' className={style.search_field} value={value} name='vehicle-search' onChange={onChange}></input>
        </div>
        <div className={style.button_area}>
            <div className={style.button}>Найти</div>
        </div>
    </div>
}

export default Search;