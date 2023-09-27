import style from "./PopupHeader.module.css"
import {FiX} from "react-icons/fi";

const PopupHeader = (props) => {
    return (
        <div className={style.wrapper}>
            <h3 className={style.header}>{props.header}</h3>
            <FiX
                size={"20px"}
                className={style.icon}
                onClick={props.onClick}
            />
        </div>
    )
}

export default PopupHeader