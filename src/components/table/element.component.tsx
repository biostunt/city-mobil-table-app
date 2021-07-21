import { useDispatch } from "react-redux";
import { IVehicle } from "../../api/cars";
import { storeActions } from "../../store";
import style from '../../styles/table.module.css';
import {getVehicleTariffsColumns} from './table.service'

interface ElementProps extends IVehicle {
    id: number;
    isActive?: boolean
    tariffs_list: Array<string>;
}
const Element = (props: ElementProps) => {
    const { id, mark, model, tariffs, tariffs_list, isActive } = props;
    const nonePointer = '-';
    const columns = getVehicleTariffsColumns(tariffs_list, tariffs, nonePointer);
    const dispatch = useDispatch();

    const onClick = (year: string) => {
        // Костыль чтобы не срабатывали колонки, у которых не определён год
        if (year === nonePointer) return;
        dispatch(storeActions.output.onVehicleChoosed({ id, mark, model, year: parseInt(year) }));
    }

    return <tr className={`${style.table_element} ${isActive? style.table_element_active: ''}`}>
        <td className={style.vehicle_name}>{`${mark} ${model}`}</td>
        {
            columns.map((e, i) =>
                <td key={i} className={style.tariff_year} onClick={onClick.bind(this, e)}>
                    {e}
                </td>)
        }
    </tr>
}

export default Element;