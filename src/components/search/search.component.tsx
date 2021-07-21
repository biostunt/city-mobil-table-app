import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {IStoreState, storeActions} from '../../store'
import style from '../../styles/search.module.css';

const DYNAMIC_SEARCH = false;


const DynamicSearch = () => {
    
    const value = useSelector((state: IStoreState) => state.search.value);
    const dispatch = useDispatch();
    const input = useRef<HTMLInputElement>(null);

    const onChange = () => dispatch(storeActions.search.onInputChanged(input.current?.value || ""));

    return <div className={style.container}>
        <div className={style.search_area_dynamic}>
            <input ref={input} placeholder='Поиск' className={style.search_field} value={value} name='vehicle-search' onChange={onChange}></input>
        </div>
    </div>
}

const StaticSearch = () => {
    const [value, setValue] = useState("");
    const input = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    
    const onChange = () => setValue(input.current?.value || "");
    const onClick = () => dispatch(storeActions.search.onInputChanged(value))
    
    return <div className={style.container}>
        <div className={style.search_area}>
            <input ref={input} placeholder='Поиск' className={style.search_field} value={value} name='vehicle-search' onChange={onChange}></input>
        </div>
        <div className={style.button_area}>
            <div className={style.button} onClick={onClick}>Найти</div>
        </div>
    </div>
}

export default DYNAMIC_SEARCH ? DynamicSearch : StaticSearch;