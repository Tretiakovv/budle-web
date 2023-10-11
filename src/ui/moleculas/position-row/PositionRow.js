import style from "./PositionRow.module.css"
import {Children, useEffect, useState} from "react";
import {FiMoreHorizontal} from "react-icons/fi";
import EditMenuPopup from "../popups/edit-menu-popup/EditMenuPopup";
import useMousePosition from "../../../hooks/UseMousePosition";
import useScrollPosition from "../../../hooks/UseScrollPosition";
import {useBranchMenuStore} from "../../../components/screens/admin-panel/establishment-menu/store/BranchMenuStore";
import {useMutation} from "react-query";
import {queryClient} from "../../../index";

const PositionRow = (props) => {

    const deleteQuery = useBranchMenuStore(
        (state) => (
            (productId) => (state.deletePosition(productId))
        )
    )

    const deletePosition = useMutation((productId) => deleteQuery(productId), {
        onSuccess: () => queryClient.invalidateQueries(["establishments"])
    })

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
                    onEdit={() => {
                    }}
                    onDelete={() => deletePosition.mutate(props.position.id)}
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