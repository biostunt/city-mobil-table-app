import React from 'react';
import style from '../../styles/sidebar.module.css';

const Sidebar = () => (
    <div className={style.container}>
        <div className="block-description">sidebar</div>
    </div>
)

export default React.memo(Sidebar);