import React from 'react';
import style from '../../styles/body.module.css';
import Sidebar from '../sidebar';
import Table from '../workspace';

const Body = () => (
    <div className={style.container}>
        <div className={style.sidebar}><Sidebar/></div>
        <div className={style.table}><Table/></div>
    </div>
)
export default React.memo(Body);