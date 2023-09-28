import mainStyle from "../../../AdminPanel.module.css";
import style from "./ManagerList.module.css"
import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import EstablishmentList from "../../../../../ui/wrappers/establishment-list/EstablishmentList";
import establishmentData from "../../../../../data/EstablishmentData";
import options from "../../../../../data/OptionData";
import {useState} from "react";
import AddManagerPopup from "../popups/AddManagerPopup";
import SuccessPopup from "../../../../../ui/moleculas/popups/success-popup/SuccessPopup";
import EmptyScreen from "../../../../../ui/wrappers/empty-screen/EmptyScreen";

const ManagerListScreen = () => {

    const [selectedOption, selectOption] = useState({name: "", id: 0})

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
                            icon={"plus.svg"}
                            buttonText={"Добавить администратора"}
                            onClick={() => setManagerPopupVisible(true)}
                        />
                    </div>
                    <div className={style.headerDropdown}>
                        <DropdownInput
                            selectedOption={selectedOption}
                            selectOption={(option) => selectOption(option)}
                            placeholder={"Выберите заведение"}
                            options={options}
                        />
                    </div>

                </HeaderColumn>

                {
                    selectedOption.id === 0 ? <EmptyScreen
                        header={"Вы не выбрали организацию"}
                        message={"Выберите организацию и мы покажем Вам список всех менеджеров в ней"}
                    /> : <EstablishmentList data={establishmentData} isManager={true}/>
                }

            </div>

        </div>
    )
}

export default ManagerListScreen