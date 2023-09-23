import style from "./TextFilter.module.css"
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import {useState} from "react";

const TextFilter = ({
                        name = "",
                        hasIcon = false
                    }) => {

    const [iconState, changeState] = useState(false)

    return (
        <div className={style.filter}>
            <h4>{name}</h4>
            {
                hasIcon ?
                    iconState ?
                        <FiChevronDown
                            size={"18px"}
                            className={style.icon}
                            onClick={() => changeState(!iconState)}
                        />
                        : <FiChevronUp
                            size={"18px"}
                            className={style.icon}
                            onClick={() => changeState(!iconState)}
                        />
                    : null
            }
        </div>
    )
}

export default TextFilter