
import style from '../../styles/search.module.css';

const Search = () => {
    
    return <div className={style.container}>
        <div className={style.search_area}>
            <input placeholder='Поиск' className={style.search_field} name='vehicle-search'></input>
        </div>
        <div className={style.button_area}>
            <div className={style.button}>Найти</div>
        </div>
    </div>
}

export default Search;