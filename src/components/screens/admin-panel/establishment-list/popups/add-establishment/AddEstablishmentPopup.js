import style from "./AddEstablishemnt.module.css"
import Popup from "../../../../../../ui/wrappers/popup/Popup";
import {FiX} from "react-icons/fi";
import TextInput from "../../../../../../ui/atoms/inputs/text-input/TextInput";
import DropdownInput from "../../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import optionList from "../../../../../../data/OptionData";
import FileInput from "../../../../../../ui/atoms/inputs/file-input/FileInput";
import TextArea from "../../../../../../ui/atoms/inputs/text-area/TextArea";

const AddEstablishmentPopup = (props) => {
    return (
        <Popup
            onClick={props.onClick}
            cardWidth={980}
        >
            <div className={style.dataRow}>
                <h2 className={style.header}>Добавить заведение</h2>
                <FiX
                    size={"20px"}
                    className={style.xIcon}
                    onClick={props.onClick}
                />
            </div>
            <div className={style.dataRow}>
                <TextInput
                    labelText={"Название"}
                    placeholder={"Введите название заведения"}
                    color={"#EEF5F9"}
                />
                <DropdownInput
                    backgroundColor={"#EEF5F9"}
                    labelText={"Категория"}
                    placeholder={"Выберите категорию заведения"}
                    options={optionList}
                />
            </div>
            <div className={style.dataRow}>
                <DropdownInput
                    backgroundColor={"#EEF5F9"}
                    labelText={"Вид кухни"}
                    placeholder={"Выберите вид кухни заведения"}
                    options={optionList}
                />
                <DropdownInput
                    backgroundColor={"#EEF5F9"}
                    labelText={"Теги"}
                    placeholder={"Выберите теги заведения"}
                    options={optionList}
                />
            </div>
            <FileInput
                labelText={"Фотография"}
                placeholder={"Выберите фотографию с диска или перетащите её в данное поле"}
            />
            <TextArea
                placeholder={"" +
                    "Придумайте завлекающее описание заведения.\n" +
                    "Идеальная длина описания — 500 символов."}
            />
            <TextInput
                labelText={"Адрес заведения"}
                placeholder={"Введите адрес заведения"}
                color={"#EEF5F9"}
            />
            <div className={style.dataRow}>
                <DropdownInput
                    backgroundColor={"#EEF5F9"}
                    labelText={"Метро"}
                    placeholder={"Выберите ближайшее метро"}
                    options={optionList}
                />
                <DropdownInput
                    backgroundColor={"#EEF5F9"}
                    labelText={"Часовой пояс"}
                    placeholder={"Выберите часовой пояс"}
                    options={optionList}
                />
            </div>
        </Popup>
    )
}

export default AddEstablishmentPopup