import { useSelector } from 'react-redux';
import {IStoreState} from '../../store'
import style from '../../styles/vehicle.module.css';


const outTemplates = {
    EMPTY: 'Машина не выбрана. Для просмотра выберите машину, приведенную в списке',
    FULL: 'Выбран автомобиль mark model year года выпуска'
}

const Vehicle = () => {



    const vehicle = useSelector((state: IStoreState) => state.output.vehicle);
    const text = vehicle ?
        Object.entries(vehicle).reduce((prev: string, [key, value]: any) => prev.replace(key, `${value}`), outTemplates.FULL)
        : outTemplates.EMPTY;

    return <div className={style.container}>
        <div className={style.text}>{
            text
        }</div>
    </div>
}

export default Vehicle;