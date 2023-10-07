import style from "./TextFilter.module.css"
import {useState} from "react";
import ChevronIcon from "../../icons/chevron-icon/ChevronIcon";

const TextFilter = ({
                        name = "",
                        hasIcon = false
                    }) => {

    const [iconState, setState] = useState(true)

    return (
        <div className={style.filter}>
            <h4>{name}</h4>
            {
                hasIcon ?
                    <ChevronIcon
                        iconState={iconState}
                        setState={() => setState(!iconState)}
                    />
                    : null
            }
        </div>
    )
}

export default TextFilter