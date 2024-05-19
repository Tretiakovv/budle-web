import style from "./DeleteBranchPopup.module.css"

import DeletePopupHeader from "../../../../../../ui/moleculas/delete-popup-header/DeletePopupHeader";
import TextInput from "../../../../../../ui/atoms/inputs/text-input/TextInput";
import Button from "../../../../../../ui/atoms/buttons/button/Button";
import Popup from "../../../../../../ui/wrappers/popup/Popup";
import {useUnit} from "effector-react";
import {useState} from "react";
import {deleteEstablishmentFx} from "../../../../../../models/establishment-list/model";

const DeleteBranchPopup = (props) => {

    const [message, setMessage] = useState('')
    const deleteEstablishment = useUnit(deleteEstablishmentFx)

    const handleDelete = () => {
        if (message === 'ПОДТВЕРЖДАЮ') {
            deleteEstablishment(props.establishment.id)
                .then(_ => props.onClose())
        }
    }

    return (
        <Popup onClick={props.onClose} fullscreen>
            <DeletePopupHeader
                name={props.establishment.name}
                category={props.establishment.category}
                onClick={props.onClose}
            />
            <p className={style.text}>
                Предупреждаем, это действие невозможно отменить и
                <span className={style.highlight}> все данные удалятся без возможности восстановления</span>
            </p>
            <TextInput
                labelText={"Подтвердите действие"}
                placeholder={"Напишите «ПОДТВЕРЖДАЮ», чтобы подтвердить удаление"}
                value={message} onChange={setMessage}
                color={"#EEF5F9"}
            />
            <Button
                buttonText={"Удалить заведение"}
                onClick={handleDelete}
            />
        </Popup>
    )

}

export default DeleteBranchPopup