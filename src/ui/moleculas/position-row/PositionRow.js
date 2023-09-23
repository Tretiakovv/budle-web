import style from "./PositionRow.module.css"
import {Children} from "react";

const PositionRow = (props) => {

    const children = Children.map(props.children, (child) => {
        return <div className={style.child}>{child}</div>
    })

    return (
        <div className={style.row}>
            {children}
        </div>
    )
}

export default PositionRow