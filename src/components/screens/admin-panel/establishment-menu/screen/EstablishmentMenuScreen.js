import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import {FiPlus} from "react-icons/fi";
import FilterRow from "../../../../../ui/atoms/rows/filter-row/FilterRow";
import {useEffect, useState} from "react";
import AddPositionPopup from "../popup/add-position-category/AddPositionPopup";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import {useUnit} from "effector-react";
import {getEstablishmentsFx} from "../../../../../models/establishment-list/model";
import AdminPanelWrapper from "../../../../../ui/wrappers/AdminPanelWrapper";
import {
    $activeEstablishmentOption,
    $establishmentOptions,
    $menu,
    changeActiveOptionEvent,
    getMenuFx
} from "../../../../../models/menu/model";
import MenuList from "../../../../../ui/wrappers/menu-list/MenuList";
import {
    $categoryToEdit,
    $productToEdit,
    setCategoryToEditEvent, setProductToEditEvent
} from "../../../../../models/menu/edit_delete_menu/model";
import EditCategoryPopup from "../popup/add-position-category/edit/EditCategoryPopup";
import EditProductPopup from "../popup/add-position-category/edit/EditProductPopup";

const EstablishmentMenuHeader = () => {

    const [setCategoryToEdit, setProductToEdit] = useUnit([setCategoryToEditEvent, setProductToEditEvent])
    const [categoryToEdit, productToEdit] = useUnit([$categoryToEdit, $productToEdit])
    const [getEstablishments, options] = useUnit([getEstablishmentsFx, $establishmentOptions])
    const [activeOption, setActiveOption] = useUnit([$activeEstablishmentOption, changeActiveOptionEvent])

    const [positionPopupVisible, setPositionPopupVisible] = useState(false)

    useEffect(() => {
        getEstablishments()
    }, [])

    if (options && activeOption) return (
        <HeaderColumn header={"Меню заведения"}>
            {positionPopupVisible && <AddPositionPopup onClose={() => setPositionPopupVisible(false)}/>}
            {categoryToEdit && <EditCategoryPopup onClose={() => setCategoryToEdit(null)}/>}
            {productToEdit && <EditProductPopup onClose={() => setProductToEdit(null)}/>}
            <Button
                className={'col-span-2'}
                buttonText={"Добавить элемент"}
                icon={<FiPlus size={"22px"}/>}
                onClick={() => setPositionPopupVisible(true)}
            />
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

    const activeOption = useUnit($activeEstablishmentOption)
    const [menu, getMenu] = useUnit([$menu, getMenuFx])

    useEffect(() => {
        if (activeOption) {
            getMenu(activeOption.id)
        }
    }, [activeOption])

    return (
        <AdminPanelWrapper>
            <div className={"flex flex-col gap-5"}>
                <EstablishmentMenuHeader/>
                <FilterRow/>
                {menu && <MenuList menu={menu}/>}
            </div>
        </AdminPanelWrapper>
    )
}

export default EstablishmentMenuScreen