import style from "./DropdwonInput.module.css"

const DropdownInput = (props) => {
    return (
        <div className={style.layout}>
            <h5>{props.defaultText}</h5>
            <img src={"chevron-down.svg"} alt={"Chevron down"}/>
        </div>
    )
}

export default DropdownInput