import style from '../../styles/app.module.css';
import Header from '../header';
import Footer from '../footer';

const App = () => (
    <div className={style.container}>
        <div className={style.header}>
            <Header/>
        </div>
        <div className={style.body}>
            <div className={style.sidebar}>sidebar</div>
            <div className={style.table}>table</div>
        </div>
        <div className={style.footer}>
            <Footer/>
        </div>
    </div>
)

export default App;