import style from "./DeletePopupHeader.module.css"
import {FiX} from "react-icons/fi";

const DeletePopupHeader = (props) => {
    return (
        <div className={style.headerRow}>
            <div className={style.headerData}>
                <div className={style.header}>{props.name}</div>
                <div>{props.category}</div>
            </div>
            <FiX
                size={"20px"}
                className={style.icon}
                onClick={props.onClick}
            />
        </div>
    )
}

export default DeletePopupHeader