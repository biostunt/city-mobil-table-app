import React from 'react';
import style from '../../styles/header.module.css';


const Header = () => (
    <div className={style.container}>
        <div className="block-description">header</div>
    </div>
)

export default React.memo(Header);