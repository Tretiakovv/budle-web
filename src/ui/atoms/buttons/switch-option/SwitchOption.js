import style from "./SwitchOption.module.css"

const SwitchOption = (props) => {

    const secondStyle = props.option.id === 0 ? style.leftTab : style.rightTab
    const classNames = `${style.tab} ${secondStyle}`
    const selectedClassNames = props.activeOption.id === props.option.id ?
        `${style.selected} ${classNames}` : classNames

    return (
        <div
            className={selectedClassNames}
            onClick={() => props.onSelect(props.option)}
        >
            {props.message}
        </div>
    );
}

export default SwitchOption;