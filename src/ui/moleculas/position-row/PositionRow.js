import style from "./PositionRow.module.css"
import {Children, useEffect, useState} from "react";
import {FiMoreHorizontal} from "react-icons/fi";
import EditMenuPopup from "../popups/edit-menu-popup/EditMenuPopup";
import useMousePosition from "../../../hooks/UseMousePosition";
import useScrollPosition from "../../../hooks/UseScrollPosition";

const PositionRow = (props) => {

    const mousePosition = useMousePosition()
    const scrollPosition = useScrollPosition()

    const [offset, setOffset] = useState({left: 0, top: 0, height: 0})
    const [isPopup, setPopup] = useState(false)

    const children = Children.map(props.children, (child) => {
        return <div className={style.child}>{child}</div>
    })

    useEffect(() => {
        if (mousePosition.x < offset.left || mousePosition.y + scrollPosition < offset.top) {
            setPopup(false)
        }
    });

    return (
        <div className={style.mainRow}>
            <div className={style.contentRow}>
                {children}
            </div>
            {
                isPopup ? <EditMenuPopup
                    setOffset={(offset) => setOffset(offset)}
                    onEdit={() => {}}
                    onDelete={() => {}}
                    element={props.position}
                /> : null
            }
            {
                props.isEdit ? <FiMoreHorizontal
                    size={"22px"}
                    className={style.icon}
                    onMouseEnter={() => setPopup(true)}
                /> : null
            }
        </div>
    )
}

export default PositionRow