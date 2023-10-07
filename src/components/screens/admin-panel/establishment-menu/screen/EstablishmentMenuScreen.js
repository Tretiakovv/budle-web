import mainStyle from "../../../AdminPanel.module.css"
import style from "./EstablishmentMenu.module.css"
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import {FiEye, FiFile, FiPlus} from "react-icons/fi";
import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import FilterRow from "../../../../../ui/atoms/rows/filter-row/FilterRow";
import MenuList from "../../../../../ui/wrappers/menu-list/MenuList";
import {useEffect, useState} from "react";
import AddPositionPopup from "../popup/add-position-category/AddPositionPopup";
import AddFromExcelPopup from "../popup/add-from-excel/AddFromExcelPopup";
import {useEstablishmentFilterStore} from "../../store/EstablishmentFilterStore";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import {useBranchMenuStore} from "../store/BranchMenuStore";
import EmptyScreen from "../../../../../ui/wrappers/empty-screen/EmptyScreen";

const EstablishmentMenuScreen = () => {

    const [isEdit, setEdit] = useState(false)
    const [addPositionPopupVisible, setPositionPopupVisible] = useState(false)
    const [addFromExcelPopupVisible, setFromExcelPopupVisible] = useState(false)

    const contentPosition = addPositionPopupVisible ? "fixed" : "relative"

    const establishmentFilterStore = useEstablishmentFilterStore()
    const branchMenuStore = useBranchMenuStore()

    useEffect(() => {
        establishmentFilterStore.filterBranches()
    }, [establishmentFilterStore.selectedEstablishment])

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
                                <DropdownInput
                                    selectedOption={establishmentFilterStore.selectedEstablishment}
                                    selectOption={(tag) => {
                                        establishmentFilterStore.selectEstablishment(tag)
                                    }}
                                    placeholder={"Выберите заведение"}
                                    options={establishmentFilterStore.establishmentTagData}
                                />
                                <DropdownInput
                                    selectedOption={establishmentFilterStore.selectedBranch}
                                    selectOption={(tag) => {
                                        establishmentFilterStore.selectBranch(tag)
                                        branchMenuStore.filterBranchMenu(
                                            tag.establishmentID,
                                            tag.id
                                        )
                                    }}
                                    placeholder={"Выберите филиал"}
                                    options={establishmentFilterStore.branchTagData}
                                />
                            </div>

                        </HeaderColumn>
                    }

                    {

                        establishmentFilterStore.selectedBranch.id === 0 ? <EmptyScreen
                            header={"Вы не выбрали организацию и филиал"}
                            message={"Выберите организацию и мы покажем Вам список всех менеджеров в ней"}
                        /> : <div className={"flex flex-col gap-5"}>
                            <FilterRow/>

                            <MenuList
                                data={branchMenuStore.branchMenu}
                                isEdit={isEdit}
                                onEditPosition={() => {}}
                                onEditSubgroup={() => {}}
                            />
                        </div>

                    }

                </div>

            </div>
        </div>
    )
}

export default EstablishmentMenuScreen