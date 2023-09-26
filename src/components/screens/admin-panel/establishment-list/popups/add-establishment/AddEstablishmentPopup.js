import style from "./AddEstablishemnt.module.css"
import Popup from "../../../../../../ui/wrappers/popup/Popup";
import {FiChevronDown, FiSearch, FiX} from "react-icons/fi";
import TextInput from "../../../../../../ui/atoms/inputs/text-input/TextInput";

const AddEstablishmentPopup = (props) => {
    return (
        <Popup>
            <div className={style.headerRow}>
                <h2>Добавить заведение</h2>
                <FiX
                    size={"20px"}
                    className={style.xIcon}
                    onClick={props.onClick}
                />
            </div>
            <div className={style.inputRow}>
                <TextInput
                    labelText={"Название"}
                    placeholder={"Введите название заведения"}
                    color={"#B6C1CE"}
                />
                <TextInput
                    labelText={"Категория"}
                    placeholder={"Введите категорию заведения"}
                    color={"#B6C1CE"}
                    icon={
                        <FiChevronDown
                            size={"22px"}
                            className={"stroke-text-gray"}
                        />
                    }
                />
            </div>
            <div className={style.inputRow}>
                <TextInput
                    labelText={"Вид кухни"}
                    placeholder={"Выберите вид кухни заведения"}
                    color={"#B6C1CE"}
                    icon={
                        <FiChevronDown
                            size={"22px"}
                            className={"stroke-text-gray"}
                        />
                    }
                />
                <TextInput
                    labelText={"Теги"}
                    placeholder={"Выберите теги заведения"}
                    color={"#B6C1CE"}
                    icon={
                        <FiChevronDown
                            size={"22px"}
                            className={"stroke-text-gray"}
                        />
                    }
                />

            </div>
        </Popup>
    )
}

export default AddEstablishmentPopup