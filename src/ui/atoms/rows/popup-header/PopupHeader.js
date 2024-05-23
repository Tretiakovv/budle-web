import style from "./PopupHeader.module.css"
import {FiX} from "react-icons/fi";

const PopupHeader = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={'flex flex-row items-baseline gap-5'}>
                <h3 className={style.header}>{props.header}</h3>
                {props.rightContent}
            </div>
            <FiX
                size={"20px"}
                className={style.icon}
                onClick={props.onClick}
            />
        </div>
    )
}

export default PopupHeader