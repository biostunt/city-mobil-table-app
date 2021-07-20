import style from '../../styles/vehicle.module.css';

const Vehicle = () => {

    const text: string = "Выбрана машина такая-то";

    return <div className={style.container}>
        <div className={style.text}>{text}</div>
    </div>
}

export default Vehicle;