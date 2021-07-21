import style from '../../styles/table.module.css';

interface HeaderProps {
    rows: Array<string>;
}
const Header = (props: HeaderProps) => {
    const { rows } = props;
    return <tr>
        {
            rows.map((row, i) => <th key={i} className={style.header_column}>{row}</th>)
        }
    </tr>
}

export default Header;