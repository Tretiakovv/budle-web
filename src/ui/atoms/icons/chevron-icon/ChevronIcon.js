import style from "./ChevronIcon.module.css"
import {FiChevronDown, FiChevronUp} from "react-icons/fi";

const ChevronIcon = (props) => {
    return (
        <div>
            {
                props.iconState ?
                    <FiChevronDown
                        size={"18px"}
                        className={style.icon}
                        onClick={props.setState}
                    />
                    : <FiChevronUp
                        size={"18px"}
                        className={style.icon}
                        onClick={props.setState}
                    />
            }
        </div>
    )
}

export default ChevronIcon