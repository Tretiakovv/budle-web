import mainStyle from "../../../AdminPanel.module.css"
import style from "./EstablishmentMenu.module.css"
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import TextInput from "../../../../../ui/atoms/inputs/text-input/TextInput";
import {FiEye, FiFile, FiPlus, FiSearch} from "react-icons/fi";
import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import FilterRow from "../../../../../ui/atoms/rows/filter-row/FilterRow";
import MenuList from "../../../../../ui/wrappers/menu-list/MenuList";
import data from "../../../../../data/MenuData";
import {useState} from "react";
import AddPositionPopup from "../popup/add-position-category/AddPositionPopup";
import AddFromExcelPopup from "../popup/add-from-excel/AddFromExcelPopup";

const EstablishmentMenuScreen = () => {

    const [isEdit, setEdit] = useState(false)
    const [addPositionPopupVisible, setPositionPopupVisible] = useState(false)
    const [addFromExcelPopupVisible, setFromExcelPopupVisible] = useState(false)

    const contentPosition = addPositionPopupVisible ? "fixed" : "relative"

    return (
        <div>

            {
                addPositionPopupVisible ? <AddPositionPopup
                    onClose={() => setPositionPopupVisible(false)}
                /> : null
            }

            {
                addFromExcelPopupVisible ? <AddFromExcelPopup
                    onClose={() => setFromExcelPopupVisible(false)}
                /> : null
            }

            <div
                style={{position: contentPosition}}
                className={mainStyle.layout}
            >

                <Sidebar activeTab={4}/>

                <div className={mainStyle.content}>

                    {
                        isEdit ? <HeaderColumn header={"Редактирование заведения"}>

                            <div className={style.headerButton}>
                                <Button
                                    buttonText={`Сохранить изменения`}
                                    onClick={() => setEdit(false)}
                                />
                            </div>

                            <div className={style.headerInputRow}>
                                <Button
                                    buttonText={"Добавить элемент"}
                                    type={"secondary"}
                                    icon={
                                        <FiPlus
                                            size={"22px"}
                                            className={"stroke-text-black"}
                                        />
                                    }
                                    onClick={() => setPositionPopupVisible(true)}
                                />
                                <Button
                                    buttonText={"Предпросмотр"}
                                    type={"secondary"}
                                    icon={
                                        <FiEye
                                            size={"22px"}
                                            className={"stroke-text-black"}
                                        />
                                    }
                                /><Button
                                buttonText={"Импорт из Excel"}
                                type={"secondary"}
                                icon={
                                    <FiFile
                                        size={"22px"}
                                        className={"stroke-text-black"}
                                    />
                                }
                                onClick={() => setFromExcelPopupVisible(true)}
                            />

                            </div>

                        </HeaderColumn> : <HeaderColumn header={"Меню заведения"}>

                            <div className={style.headerButton}>
                                <Button
                                    buttonText={`Редактировать меню`}
                                    onClick={() => setEdit(true)}
                                />
                            </div>

                            <div className={style.headerInputRow}>
                                <TextInput
                                    placeholder={"Аджикинежаль"}
                                    icon={
                                        <FiSearch
                                            size={"22px"}
                                            className={"stroke-text-gray"}
                                        />
                                    }
                                />
                                <TextInput
                                    placeholder={"ул. Советская 32"}
                                    icon={
                                        <FiSearch
                                            size={"22px"}
                                            className={"stroke-text-gray"}
                                        />
                                    }
                                />
                            </div>

                        </HeaderColumn>
                    }

                    <FilterRow/>

                    <MenuList
                        data={data}
                        isEdit={isEdit}
                        onEditPosition={() => {
                        }}
                        onEditSubgroup={() => {
                        }}
                    />

                </div>

            </div>
        </div>
    )
}

export default EstablishmentMenuScreen