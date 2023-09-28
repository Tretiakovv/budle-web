import style from "./Switch.module.css"

const Switch = (props) => {

    const backgroundColor = props.isActive ? "#654DF6" : "#B6C1CE"
    const marginLeft = props.isActive ? "35px" : "5px"
    const labelColor = props.isActive ? "#181818" : "#B6C1CE"

    return (
        <div className={style.switchRow}>
            <div
                style={{backgroundColor: backgroundColor}}
                className={style.switch}
                onClick={props.onClick}
            >
                <div
                    style={{marginLeft: marginLeft}}
                    className={style.circle}
                />
            </div>
            <h3 style={{color: labelColor}}>{props.labelText}</h3>
        </div>
    )
}

export default Switch