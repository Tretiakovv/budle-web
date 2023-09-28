import style from "./AddPositionPopup.module.css"
import Popup from "../../../../../ui/wrappers/popup/Popup";
import PopupHeader from "../../../../../ui/atoms/rows/popup-header/PopupHeader";
import SwitchButton from "../../../../../ui/moleculas/switch-button/SwitchButton";
import TextInput from "../../../../../ui/atoms/inputs/text-input/TextInput";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import optionList from "../../../../../data/OptionData";
import FileInput from "../../../../../ui/atoms/inputs/file-input/FileInput";
import TextArea from "../../../../../ui/atoms/inputs/text-area/TextArea";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import Switch from "../../../../../ui/atoms/buttons/switch/Switch";
import {useState} from "react";

const AddPositionPopup = (props) => {

    const [isActiveSwitch, setActiveSwitch] = useState(false)
    const [selectedOption, selectOption] = useState({name: "", id: 0})

    const switchOptions = [
        {id: 0, message: "Блюдо"},
        {id: 1, message: "Категория"}
    ]

    const [activeOption, setActiveOption] = useState(switchOptions[0])

    return (
        <Popup
            cardWidth={980}
            onClick={props.onClose}
        >
            <PopupHeader
                header={"Добавить элемент"}
                onClick={props.onClose}
            />
            <SwitchButton
                options={switchOptions}
                activeOption={activeOption}
                onSelect={(option) => setActiveOption(option)}
            />
            <div className={style.dataRow}>
                <TextInput
                    labelText={"Название"}
                    placeholder={"Введите название блюда"}
                    color={"#EEF5F9"}
                />
                <TextInput
                    labelText={"Цена, ₽"}
                    placeholder={"Введите цену блюда"}
                    color={"#EEF5F9"}
                />
            </div>
            <div className={style.dataRow}>
                <TextInput
                    labelText={"Граммовка"}
                    placeholder={"Введите граммовку блюда"}
                    color={"#EEF5F9"}
                />
                <DropdownInput
                    backgroundColor={"#EEF5F9"}
                    labelText={"Категория"}
                    placeholder={"Выберите категорию блюда"}
                    selectedOption={selectedOption}
                    selectOption={(option) => selectOption(option)}
                    options={optionList}
                />
            </div>
            <FileInput/>
            <TextArea
                placeholder={"Придумайте интересное описание блюда." +
                    "Идеальное количество символов — 100."}
            />
            <Switch
                labelText={"Продаётся"}
                isActive={isActiveSwitch}
                onClick={() => setActiveSwitch(!isActiveSwitch)}
            />
            <div className={style.buttonRow}>
                <Button
                    buttonText={"Добавить элемент"}
                    onClick={() => {
                    }}
                />
            </div>
        </Popup>
    )
}

export default AddPositionPopup