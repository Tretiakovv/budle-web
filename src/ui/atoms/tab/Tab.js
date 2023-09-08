import styles from "./Tab.module.css"

const Tab = (props) => {

    const secondStyle = props.type === "left" ? styles.leftTab : styles.rightTab;
    const classNames = `${styles.tab} ${secondStyle}`

    return (
        <button className={classNames}>
            {props.message}
        </button>
    );
}

export default Tab;