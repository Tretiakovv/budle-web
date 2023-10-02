import style from "./AddManager.module.css"
import Popup from "../../../../../ui/wrappers/popup/Popup";
import PopupHeader from "../../../../../ui/atoms/rows/popup-header/PopupHeader";
import TextInput from "../../../../../ui/atoms/inputs/text-input/TextInput";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import optionList from "../../../../../data/entity/OptionData";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import {useState} from "react";

const AddManagerPopup = (props) => {

    const [selectedOption,selectOption] = useState({name:"", id: 0})

    return (
        <Popup
            onClick={props.onClose}
            cardWidth={980}
        >
            <PopupHeader
                header={"Добавление администратора"}
                onClick={props.onClose}
            />
            <div className={style.dataRow}>
                <DropdownInput
                    selectedOption={selectedOption}
                    selectOption={(option) => selectOption(option)}
                    backgroundColor={"#EEF5F9"}
                    labelText={"Заведение"}
                    placeholder={"Выберите заведение"}
                    options={optionList}
                />
                <DropdownInput
                    selectedOption={selectedOption}
                    selectOption={(option) => selectOption(option)}
                    backgroundColor={"#EEF5F9"}
                    labelText={"Филиал"}
                    placeholder={"Выберите филиал"}
                    options={optionList}
                />
            </div>
            <div className={style.dataRow}>
                <TextInput
                    color={"#EEF5F9"}
                    labelText={"ФИО"}
                    placeholder={"Иванов Иван Иванович"}
                />
                <TextInput
                    color={"#EEF5F9"}
                    labelText={"Электронная почта"}
                    placeholder={"example@gmail.com"}
                />
            </div>
            <div className={style.buttonRow}>
                <Button
                    buttonText={"Отправить приглашение на почту"}
                    onClick={props.onSubmit}
                />
            </div>
        </Popup>
    )
}

export default AddManagerPopup