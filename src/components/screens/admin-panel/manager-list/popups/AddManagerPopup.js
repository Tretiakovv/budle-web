import style from "./AddManager.module.css"
import Popup from "../../../../../ui/wrappers/popup/Popup";
import PopupHeader from "../../../../../ui/atoms/rows/popup-header/PopupHeader";
import TextInput from "../../../../../ui/atoms/inputs/text-input/TextInput";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import {useEffect, useState} from "react";
import {mapEstablishmentsToOptions} from "../../../../../utils/mapEstablishmentsToOptions";
import {useStore} from "../../../../../store/store";
import {useMutation, useQueryClient} from "react-query";
import {useShallow} from "zustand/react/shallow";

const AddManagerPopup = (props) => {

    const queryClient = useQueryClient()

    const [establishments, getEstablishments] = useStore(useShallow(
        state => [state.establishmentList, state.getEstablishmentList]
    ))

    const addWorker = useStore(state => state.addWorker)

    const options = mapEstablishmentsToOptions(establishments)
    const [activeEstOption, setActiveEstOption] = useState({id: 0, name: ""})
    const [workerName, setWorkerName] = useState("")
    const [workerEmail, setWorkerEmail] = useState("")

    const addWorkerMutation = useMutation({
        mutationKey: ["post", "worker"],
        mutationFn: (worker) => addWorker(worker),
        onSuccess: () => queryClient.invalidateQueries(
            {queryKey: ["get", "workers", activeEstOption.id]}
        )
    })

    const handleSubmitData = () => {
        const data = {
            establishmentId: activeEstOption.id,
            name: workerName, email: workerEmail
        }
        addWorkerMutation.mutate(data)
        props.onClose()
    }

    useEffect(() => {
        getEstablishments()
    }, [])

    return (
        <Popup
            onClick={props.onClose}
            cardWidth={980}
        >
            <PopupHeader
                header={"Добавление администратора"}
                onClick={props.onClose}
            />
            <DropdownInput
                className={"z-30"}
                selectedOption={activeEstOption}
                selectOption={setActiveEstOption}
                backgroundColor={"#EEF5F9"}
                labelText={"Заведение"}
                placeholder={"Выберите заведение"}
                options={options}
            />
            <TextInput
                color={"#EEF5F9"}
                labelText={"Имя сотрудника"}
                placeholder={"Иванов Иван Иванович"}
                value={workerName}
                onChange={setWorkerName}
            />
            <TextInput
                color={"#EEF5F9"}
                labelText={"Электронная почта"}
                placeholder={"example@gmail.com"}
                value={workerEmail}
                onChange={setWorkerEmail}
            />
            <div className={style.buttonRow}>
                <Button
                    buttonText={"Отправить приглашение на почту"}
                    onClick={handleSubmitData}
                />
            </div>
        </Popup>
    )
}

export default AddManagerPopup