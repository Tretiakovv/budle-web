import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import {FiEye, FiFile, FiPlus} from "react-icons/fi";
import FilterRow from "../../../../../ui/atoms/rows/filter-row/FilterRow";
import {useEffect, useState} from "react";
import AddPositionPopup from "../popup/add-position-category/AddPositionPopup";
import AddFromExcelPopup from "../popup/add-from-excel/AddFromExcelPopup";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import {useUnit} from "effector-react";
import {getEstablishmentsFx} from "../../../../../models/establishment-list/model";
import AdminPanelWrapper from "../../../../../ui/wrappers/AdminPanelWrapper";
import {
    $activeEstablishmentOption,
    $editMode,
    $establishmentOptions,
    changeActiveOptionEvent, getMenuFx,
    toggleEditModeEvent
} from "../../../../../models/menu/model";

const EstablishmentMenuHeader = () => {

    const [editMode, toggleEditMode] = useUnit([$editMode, toggleEditModeEvent])
    const [getEstablishments, options] = useUnit([getEstablishmentsFx, $establishmentOptions])
    const [activeOption, setActiveOption, getMenu] = useUnit([$activeEstablishmentOption, changeActiveOptionEvent, getMenuFx])

    const [positionPopupVisible, setPositionPopupVisible] = useState(false)
    const [excelPopupVisible, setExcelPopupVisible] = useState(false)

    useEffect(() => {
        if (activeOption) {
            getMenu(activeOption.id)
        }
    }, [activeOption])

    useEffect(() => {
        getEstablishments()
    }, [])

    if (editMode) {
        return (
            <HeaderColumn header={"Редактирование заведения"}>
                {positionPopupVisible && <AddPositionPopup
                    onClose={() => setPositionPopupVisible(false)}
                />}
                {excelPopupVisible && <AddFromExcelPopup
                    onClose={() => setExcelPopupVisible(false)}
                />}
                <Button
                    className={'col-span-2'}
                    buttonText={`Сохранить изменения`}
                    onClick={toggleEditMode}
                />
                <div className={'col-span-6 gap-5 flex flex-row justify-center items-center'}>
                    <Button
                        buttonText={"Добавить элемент"}
                        type={"secondary"}
                        icon={<FiPlus size={"22px"}/>}
                        onClick={() => setPositionPopupVisible(true)}
                    />
                    <Button
                        buttonText={"Предпросмотр"}
                        icon={<FiEye size={"22px"}/>}
                        type={"secondary"}
                    />
                    <Button
                        buttonText={"Импорт из Excel"}
                        icon={<FiFile size={"22px"}/>}
                        onClick={() => setExcelPopupVisible(true)}
                        type={"secondary"}
                    />
                </div>
            </HeaderColumn>
        )
    }

    if (options && activeOption) return (
        <HeaderColumn header={"Меню заведения"}>
            <div className={'col-span-2'}>
                <Button
                    buttonText={'Редактировать меню'}
                    onClick={toggleEditMode}
                />
            </div>
            <DropdownInput
                className={'col-span-6'}
                selectedOption={activeOption}
                selectOption={setActiveOption}
                placeholder={"Выберите заведение"}
                options={options}
            />
        </HeaderColumn>
    )

}

const EstablishmentMenuScreen = () => {
    return (
        <AdminPanelWrapper>
            <div className={"flex flex-col gap-5"}>
                <EstablishmentMenuHeader/>
                <FilterRow/>
            </div>
        </AdminPanelWrapper>
    )
}

export default EstablishmentMenuScreen