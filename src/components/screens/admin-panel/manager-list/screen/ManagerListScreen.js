import mainStyle from "../../../AdminPanel.module.css";
import style from "./ManagerList.module.css"
import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import EstablishmentList from "../../../../../ui/wrappers/establishment-list/EstablishmentList";
import {useEffect, useState} from "react";
import AddManagerPopup from "../popups/AddManagerPopup";
import SuccessPopup from "../../../../../ui/moleculas/popups/success-popup/SuccessPopup";
import EmptyScreen from "../../../../../ui/wrappers/empty-screen/EmptyScreen";
import {FiPlus} from "react-icons/fi";
import {useEstablishmentFilterStore} from "../../store/EstablishmentFilterStore";
import {useEstablishmentStore} from "../../store/EstablishmentStore";
import {useShallow} from "zustand/shallow";

const ManagerListScreen = () => {

    const establishmentStore = useEstablishmentStore()

    const [
        selectedEstablishment,
        onSelectEstablishment,
        establishmentTagData
    ] = useEstablishmentFilterStore(
        useShallow((state) => ([
            state.selectedEstablishment,
            (tag) => state.selectEstablishment(tag),
            state.establishmentTagData
        ]))
    )

    useEffect(() => {
        establishmentStore.getEstablishments()
    }, [])

    useEffect(() => {
        establishmentStore.filterEstablishments(selectedEstablishment.name)
    }, [selectedEstablishment.name])

    const [managerPopupVisible, setManagerPopupVisible] = useState(false)
    const [successPopupVisible, setSuccessPopupVisible] = useState(false)

    const onSubmitManagerPopup = () => {
        setManagerPopupVisible(false)
        setSuccessPopupVisible(true)
    }

    return (
        <div className={mainStyle.layout}>

            <Sidebar activeTab={3}/>

            {
                managerPopupVisible ? <AddManagerPopup
                    onClose={() => setManagerPopupVisible(false)}
                    onSubmit={() => onSubmitManagerPopup()}
                /> : null
            }

            {
                successPopupVisible ? <SuccessPopup
                    image={"rocket.png"}
                    header={"Приглашение отправлено"}
                    message={"На почту администратора отправлено приглашение с логином и паролем"}
                    buttonText={"Прекрасно!"}
                    onClose={() => setSuccessPopupVisible(false)}
                /> : null
            }

            <div className={mainStyle.content}>

                <HeaderColumn header={"Список администраторов"}>

                    <div className={style.headerButton}>
                        <Button
                            icon={<FiPlus size={"22px"} stroke={"white"}/>}
                            buttonText={"Добавить администратора"}
                            onClick={() => setManagerPopupVisible(true)}
                        />
                    </div>
                    <div className={style.headerDropdown}>
                        <DropdownInput
                            selectedOption={selectedEstablishment}
                            selectOption={(tag) => onSelectEstablishment(tag)}
                            placeholder={"Выберите заведение"}
                            options={establishmentTagData}
                        />
                    </div>

                </HeaderColumn>

                {
                    selectedEstablishment.id === 0 ? <EmptyScreen
                        header={"Вы не выбрали организацию"}
                        message={"Выберите организацию и мы покажем Вам список всех менеджеров в ней"}
                    /> : <EstablishmentList data={establishmentStore.establishmentList} isManager={true}/>
                }

            </div>

        </div>
    )
}

export default ManagerListScreen