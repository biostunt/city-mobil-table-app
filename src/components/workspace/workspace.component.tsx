import style from '../../styles/workspace.module.css';
import Search from '../search';
import Vehicle from '../vehicle';
import Table from '../table';

const Workspace = () => {
    return <div className={style.container}>
        <div className={style.search}>
            <Search />
        </div>
        <div className={style.table}>
            <Table />
        </div>
        <div className={style.vehicle}>
            <Vehicle />
        </div>
    </div>
}

export default Workspace;