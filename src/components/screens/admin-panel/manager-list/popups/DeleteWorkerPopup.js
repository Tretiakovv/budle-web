import React, {useRef, useState} from 'react';
import Popup from "../../../../../ui/wrappers/popup/Popup";
import TextInput from "../../../../../ui/atoms/inputs/text-input/TextInput";
import style from "./AddManager.module.css";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import PopupHeader from "../../../../../ui/atoms/rows/popup-header/PopupHeader";
import {useUnit} from "effector-react";
import {$managerScreenActiveOption, $workerToDelete, deleteWorkerFx} from "../../../../../models/workers/model";
import Toast from "../../../../../ui/moleculas/toast/Toast";

const DeleteWorkerPopup = (props) => {

    const establishment = useUnit($managerScreenActiveOption)
    const [workerToDelete, deleteWorker] = useUnit([$workerToDelete, deleteWorkerFx])
    const [inputText, setInputText] = useState("")

    const successRef = useRef(null)

    const showFailure = (message) => {
        successRef.current.show({
            severity: 'error',
            summary: 'Возникли ошибки при добавлении сотрудника.',
            detail: message,
        });
    };

    const handleDelete = () => {
        if (inputText === "ПОДТВЕРЖДАЮ") {
            deleteWorker({establishmentId: establishment.id, workerId: workerToDelete.id})
                .then(props.onClose)
                .catch(showFailure)
        }
    }

    return (
        <Popup
            fullscreen
            onClick={props.onClose}
            cardWidth={700}
        >
            <Toast ref={successRef}/>
            <PopupHeader
                header={`${workerToDelete.firstName} ${workerToDelete.middleName}`}
                onClick={props.onClose}
            />
            <div className={"w-full text-xl font-medium flex flex-col"}>
                Предупреждаем, это действие невозможно отменить
                <span className={"text-message-wrong"}> и все данные удалятся без возможности восстановления</span>
            </div>
            <TextInput
                color={"#EEF5F9"}
                labelText={"Подтвердите действие"}
                placeholder={"Напишите «ПОДТВЕРЖДАЮ», чтобы подтвердить удаление"}
                value={inputText}
                onChange={setInputText}
            />
            <div className={style.buttonRow}>
                <Button
                    className={"bg-message-wrong font-semibold hover:bg-text-black hover:duration-200 transition"}
                    buttonText={"Удалить сотрудника"}
                    onClick={handleDelete}
                />
            </div>
        </Popup>
    )

};

export default DeleteWorkerPopup;
