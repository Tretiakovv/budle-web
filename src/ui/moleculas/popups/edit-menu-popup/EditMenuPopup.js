import style from "./EditMenuPopup.module.css"
import {FiEdit, FiTrash2} from "react-icons/fi";
import {useLayoutEffect, useRef, useState} from "react";

const EditMenuPopup = (props) => {

    const ref = useRef(null)

    const [popupHeight,setPopupHeight] = useState(0)
    const [popupLeftOffset,setPopupLeftOffset] = useState(0)
    const [popupTopOffset,setPopupTopOffset] = useState(0)

    useLayoutEffect(() => {

        setPopupHeight(ref.current.offsetHeight)
        setPopupLeftOffset(ref.current.offsetLeft)
        setPopupTopOffset(ref.current.offsetTop)

        props.setOffset(
            {
                left: popupLeftOffset,
                top: popupTopOffset,
                height: popupHeight
            }
        )

    },[popupLeftOffset]);

    return (
        <div
            style={{marginTop: `${popupHeight + 40}px`}}
            className={style.wrapper}
            ref={ref}
        >
            <div
                className={style.tabRow}
                onClick={() => props.onEdit(props.element)}
            >
                <FiEdit
                    size={"22px"}
                    className={"stroke-text-black"}
                />
                <h4>Редактировать</h4>
            </div>
            <div
                className={style.tabRow}
                onClick={() => props.onDelete(props.element)}
            >
                <FiTrash2
                    size={"22px"}
                    className={"stroke-message-wrong"}
                />
                <h4 className={"text-message-wrong"}>Удалить</h4>
            </div>
        </div>
    )
}
export default EditMenuPopup