import { IResponse } from '../../api/cars';
import Header from './header.component';
import Element from './element.component';
import style from '../../styles/table.module.css';
import {getTableHeaderElements} from './table.service';
import { useSelector } from 'react-redux';
import { IStoreState } from '../../store';
import pipeData from './table.pipe';

interface ViewProps {
    data: IResponse;
}
const View = (props: ViewProps) => {
    const {tariffs_list, cars} = props.data;
    
    const rows = getTableHeaderElements(tariffs_list);
    const activeVehicle = useSelector((state: IStoreState) => state.output.vehicle);
    
    const searchLine = useSelector((state: IStoreState) => state.search.value);
    const orderBy = useSelector((state: IStoreState) => state.order.orderBy);
    const orderType= useSelector((state: IStoreState) => state.order.orderType);

    return <div className={style.table_container}>
        <table className={style.table}>
            <thead className={style.table_head}>
                <Header rows={rows} />
            </thead>
            <tbody className={style.table_body}>
                {
                    pipeData(cars, searchLine, orderBy, orderType).map((elem, i) =>
                        <Element key={i} {...elem} isActive={activeVehicle? activeVehicle.id === elem.id : false} tariffs_list={tariffs_list} />)
                }
            </tbody>
        </table>
    </div>
}

export default View;