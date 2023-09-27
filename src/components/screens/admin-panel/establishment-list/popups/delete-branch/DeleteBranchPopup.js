import style from "./DeleteBranchPopup.module.css"

import DeletePopupHeader from "../../../../../../ui/moleculas/delete-popup-header/DeletePopupHeader";
import TextInput from "../../../../../../ui/atoms/inputs/text-input/TextInput";
import Button from "../../../../../../ui/atoms/buttons/button/Button";
import Popup from "../../../../../../ui/wrappers/popup/Popup";

const DeleteBranchPopup = (props) => {
    return (
        <Popup onClick={props.onClose}>
            <DeletePopupHeader
                establishmentName={props.establishmentName}
                address={props.branch.address}
                additional={props.branch.additional}
                onClick={props.onClose}
            />
            <p className={style.text}>
                Предупреждаем, это действие невозможно отменить и
                <span className={style.highlight}> все данные удалятся без возможности восстановления</span>
            </p>
            <TextInput
                labelText={"Подтвердите действие"}
                placeholder={"Напишите «ПОДТВЕРЖДАЮ», чтобы подтвердить удаление"}
                color={"#EEF5F9"}
            />
            <Button
                buttonText={"Удалить заведение"}
                onClick={props.onDelelte}
            />
        </Popup>
    )
}

export default DeleteBranchPopup