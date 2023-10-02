import style from "./AddFromExcel.module.css"
import Popup from "../../../../../../ui/wrappers/popup/Popup";
import PopupHeader from "../../../../../../ui/atoms/rows/popup-header/PopupHeader";
import FileInput from "../../../../../../ui/atoms/inputs/file-input/FileInput";
import Button from "../../../../../../ui/atoms/buttons/button/Button";
import {FiDownload} from "react-icons/fi";

const AddFromExcelPopup = (props) => {
    return (
        <Popup
            cardWidth={980}
            cardJustify={"start"}
            onClick={props.onClose}
        >

            <PopupHeader
                header={"Импорт файла из Excel"}
                onClick={props.onClose}
            />

            <FileInput labelText={"Выберите файл .xls ,xlsx"}/>

            <div className={style.buttonRow}>

                <div className={style.button}>
                    <Button
                        buttonText={"Импорт файла"}
                        onClick={() => {
                        }}
                    />
                </div>

                <div className={style.button}>
                    <Button
                        buttonText={"Скачать пример таблицы"}
                        type={"secondary"}
                        icon={
                            <FiDownload
                                size={"22px"}
                                className={style.icon}
                            />
                        }
                        onClick={() => {}}
                    />
                </div>

            </div>

        </Popup>
    )
}

export default AddFromExcelPopup