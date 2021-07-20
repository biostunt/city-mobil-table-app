import style from '../../styles/app.module.css';
import Header from '../header';
import Footer from '../footer';
import Body from '../body';

const App = () => (
    <div className={style.container}>
        <div className={style.header}>
            <Header/>
        </div>
        <div className={style.body}>
            <Body/>
        </div>
        <div className={style.footer}>
            <Footer/>
        </div>
    </div>
)

export default App;