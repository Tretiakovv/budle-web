import styles from './TabRow.module.css'
import Tab from "../../atoms/tab/Tab";

const TabRow = (props) => {
    return (
        <div className={styles.tabRow}>
            <Tab message={props.left} type="left"/>
            <Tab message={props.right} type="right"/>
        </div>
    );
}

export default TabRow;