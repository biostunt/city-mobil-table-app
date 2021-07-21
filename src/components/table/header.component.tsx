import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState, storeActions } from '../../store';
import style from '../../styles/table.module.css';

import arrowUp from '../../resources/up-arrow.svg';
import arrowDown from '../../resources/down-arrow.svg';


interface HeaderProps {
    rows: Array<string>;
}

const Header = (props: HeaderProps) => {
    const { rows } = props;
    
    const activeColumn = useSelector((state: IStoreState) => state.order.orderBy);
    const orderType = useSelector((state: IStoreState) => state.order.orderType);
    const dispatch = useDispatch();

    const onClick = (columnName: string) => {
        //Костыль для названия машины ч.1
        if(columnName === 'Марка и модель') columnName = 'name'
        if (activeColumn === columnName) {
            dispatch(storeActions.order.onOrderTypeChanged(orderType === "asc" ? "desc" : "asc"))
        } else {
            dispatch(storeActions.order.onOrderByChanged(columnName));
            dispatch(storeActions.order.onOrderTypeChanged("asc"))
        }
    }
    //Костыль для названия машины ч.2
    //я бы мог проиндексировать колонки, и делать по индексам, но понял это слишком поздно...
    let activeColumnFixed = activeColumn === 'name' ? 'Марка и модель' : activeColumn;
    return <tr>
        {
            rows.map((column, i) =>
                <th key={i} className={style.header_column} onClick={onClick.bind(this, column)}>
                    {column}
                    {
                        activeColumnFixed === column ?
                            <img className={style.header_column_image} alt={orderType} src={orderType == "asc" ? arrowUp : arrowDown} />
                            : ""
                    }
                </th>
            )
        }
    </tr>
}

export default Header;