import style from "./PositionRow.module.css"
import {Children, useEffect, useRef, useState} from "react";
import {FiMoreHorizontal} from "react-icons/fi";
import EditMenuPopup from "../popups/edit-menu-popup/EditMenuPopup";
import useMousePosition from "../../../hooks/UseMousePosition";
import useScrollPosition from "../../../hooks/UseScrollPosition";
import {useBranchMenuStore} from "../../../components/screens/admin-panel/establishment-menu/store/BranchMenuStore";
import {useMutation} from "react-query";
import {queryClient} from "../../../index";
import {useUnit} from "effector-react";
import {$activeEstablishmentOption} from "../../../models/menu/model";
import {deleteCategoryFx, deleteProductFx} from "../../../models/menu/edit_delete_menu/model";
import Toast from "../toast/Toast";
import Tooltip from "../tooltip/Tooltip";

const PositionRow = (props) => {

    const ref = useRef(null)

    const establishment = useUnit($activeEstablishmentOption)
    const deleteSection = useUnit(deleteProductFx)

    const showSuccess = () => {
        ref.current.show({
            severity: 'success',
            summary: 'Позиция успешно удалена!'
        });
    };

    const showFailure = (message) => {
        ref.current.show({
            severity: 'error',
            summary: 'Возникли ошибки при удалении позиции',
            detail: message,
        });
    };

    const handleDelete = () => deleteSection({
        establishmentId: establishment.id,
        productId: props.productId
    })
        .then(showSuccess)
        .catch(showFailure)

    const handleEdit = () => console.log("AAAA")

    const children = Children.map(props.children, (child) => {
        return <div className={style.child}>{child}</div>
    })

    return (
        <div className={style.mainRow}>
            <Toast ref={ref}/>
            <div className={style.contentRow}>
                {children}
            </div>
            <Tooltip onEdit={handleEdit} onDelete={handleDelete}>
                <div className={'cursor-pointer'}>
                    <FiMoreHorizontal
                        className={'text-gray-400'}
                        size={'20px'}
                    />
                </div>
            </Tooltip>
        </div>
    )

}

export default PositionRow