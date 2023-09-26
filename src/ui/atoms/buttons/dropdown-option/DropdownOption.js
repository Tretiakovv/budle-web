import style from "./DropdownOption.module.css"
import {FiCheck} from "react-icons/fi";

const DropdownOption = (props) => {
    return (
        <div
            className={style.wrapper}
            onClick={() => {props.onClick(props.option)}}
        >
            <h4 className={style.option}>{props.option.name}</h4>
            {
                props.selectedOption.id === props.option.id ?
                    <FiCheck
                        size={"22px"}
                        stroke={"black"}
                    /> : null
            }
        </div>
    )
}

export default DropdownOption