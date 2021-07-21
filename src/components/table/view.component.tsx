import { IResponse } from '../../api/cars';
import Header from './header.component';
import Element from './element.component';
import style from '../../styles/table.module.css';
import {getTableHeaderElements} from './table.service';

interface ViewProps {
    data: IResponse;
}
const View = (props: ViewProps) => {
    const {tariffs_list, cars} = props.data;
    const rows = getTableHeaderElements(tariffs_list);
    

    return <div className={style.table_container}>
        <table className={style.table}>
            <thead className={style.table_head}>
                <Header rows={rows} />
            </thead>
            <tbody className={style.table_body}>
                {
                    cars.map((elem, i) => <Element key={i} {...elem} tariffs_list={tariffs_list} />)
                }
            </tbody>
        </table>
    </div>
}

export default View;