import styles from "./SwitchOption.css"

const SwitchOption = ({type, message, onClick, activeTab}) => {

    const secondStyle = type === "left" ? styles.leftTab : styles.rightTab;
    const classNames = `${styles.tab} ${secondStyle}`
    const selectedClassNames = activeTab === type ? `${styles.selected} ${classNames}` : classNames

    return (
        <button className={selectedClassNames} onClick={onClick}>
            {message}
        </button>
    );
}

export default SwitchOption;