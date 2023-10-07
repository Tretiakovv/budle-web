import style from "./AddEstablishemnt.module.css"
import Popup from "../../../../../../ui/wrappers/popup/Popup";
import {FiX} from "react-icons/fi";
import TextInput from "../../../../../../ui/atoms/inputs/text-input/TextInput";
import DropdownInput from "../../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import establishmentTagList from "../../../../../../data/entity/EstablishmentTagListData";
import FileInput from "../../../../../../ui/atoms/inputs/file-input/FileInput";
import TextArea from "../../../../../../ui/atoms/inputs/text-area/TextArea";

const AddEstablishmentPopup = (props) => {

    const selectedOption = {id: 0, name: ""}

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
                    selectedOption={selectedOption}
                    options={establishmentTagList}
                />
            </div>
            <div className={style.dataRow}>
                <DropdownInput
                    backgroundColor={"#EEF5F9"}
                    labelText={"Вид кухни"}
                    placeholder={"Выберите вид кухни заведения"}
                    selectedOption={selectedOption}
                    options={establishmentTagList}
                />
                <DropdownInput
                    backgroundColor={"#EEF5F9"}
                    labelText={"Теги"}
                    placeholder={"Выберите теги заведения"}
                    selectedOption={selectedOption}
                    options={establishmentTagList}
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
                    selectedOption={selectedOption}
                    options={establishmentTagList}
                />
                <DropdownInput
                    backgroundColor={"#EEF5F9"}
                    labelText={"Часовой пояс"}
                    placeholder={"Выберите часовой пояс"}
                    selectedOption={selectedOption}
                    options={establishmentTagList}
                />
            </div>
        </Popup>
    )
}

export default AddEstablishmentPopup