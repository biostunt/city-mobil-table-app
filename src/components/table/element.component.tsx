import { IVehicle } from "../../api/cars";
import style from '../../styles/table.module.css';
import {getVehicleTariffsColumns} from './table.service'

interface ElementProps extends IVehicle {
    tariffs_list: Array<string>;
}
const Element = (props: ElementProps) => {
    const { mark, model, tariffs, tariffs_list } = props;
    const columns = getVehicleTariffsColumns(tariffs_list, tariffs);
    return <tr>
        <td className={style.vehicle_name}>{`${mark} ${model}`}</td>
        {
            columns.map((e, i) => <td key={i} className={style.tariff_year}>{e}</td>)
        }
    </tr>
}

export default Element;