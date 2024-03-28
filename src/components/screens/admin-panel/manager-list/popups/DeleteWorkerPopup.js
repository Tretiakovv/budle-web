import React, {useState} from 'react';
import Popup from "../../../../../ui/wrappers/popup/Popup";
import TextInput from "../../../../../ui/atoms/inputs/text-input/TextInput";
import style from "./AddManager.module.css";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import {useStore} from "../../../../../store/store";
import {useMutation, useQueryClient} from "react-query";
import PopupHeader from "../../../../../ui/atoms/rows/popup-header/PopupHeader";

const DeleteWorkerPopup = (props) => {

    console.log(props)

    const queryClient = useQueryClient()

    const [inputText, setInputText] = useState("")

    const removeWorker = useStore(state => state.removeWorker)

    const removeWorkerMutation = useMutation({
        mutationKey : ["delete", "worker", props.establishmentId, props.worker.id],
        mutationFn : () => removeWorker(props.establishmentId, props.worker.id),
        onMutate : () => queryClient.invalidateQueries(["get", "workers", props.establishmentId])
    })

    const handleDelete = () => {
        if (inputText === "ПОДТВЕРЖДАЮ") {
            removeWorkerMutation.mutate()
            props.onClose()
        }
    }

    return (
        <Popup
            onClick={props.onClose}
            cardWidth={700}
        >
            <PopupHeader
                header={props.worker.firstName + " " + props.worker.middleName}
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
