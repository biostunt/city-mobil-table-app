import { useEffect } from 'react';
import { useState } from 'react';
import { IVehicle,getVehiclesInformation, IResponse  } from '../../api/cars';
import style from '../../styles/table.module.css';
import Loading from './loading.component';
import View from './view.component';

const Table = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<IResponse>({cars: new Array<IVehicle>(0),tariffs_list: new Array<string>(0)})

    useEffect(() => getVehiclesInformation((res: IResponse) => {
        setData(res);
        setLoading(false);
    }), []);
    return <div className={style.container}>
        {
            loading ? <Loading /> : <View data={data}/>
        }
    </div>
}

export default Table;