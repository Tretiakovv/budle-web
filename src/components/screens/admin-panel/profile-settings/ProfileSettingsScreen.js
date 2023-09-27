import mainStyle from "../../AdminPanel.module.css"
import style from "./ProfileSettings.module.css"

import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";
import Button from "../../../../ui/atoms/buttons/button/Button";
import {useState} from "react";
import SuccessPopup from "../../../../ui/moleculas/popups/SuccessPopup";

const ProfileSettingsScreen = () => {

    const color = "#EEF5F9"

    const [popupVisible, setPopupVisible] = useState(false)

    return (
        <div className={mainStyle.layout}>

            <Sidebar activeTab={2}/>

            {
                popupVisible ? <SuccessPopup
                    image={"rocket.png"}
                    header={"Данные успешно сохранены!"}
                    message={"Мы отправили Вам на почту письмо с новым паролем"}
                    buttonText={"Прекрасно!"}
                    onClose={() => setPopupVisible(false)}
                /> : null
            }

            <div className={mainStyle.content}>

                <HeaderColumn header={"Настройки"}/>

                <div className={style.settings}>

                    <div className={style.settingsInput}>
                        <TextInput
                            labelText={"ФИО"}
                            placeholder={"Третьяков Артём Александрович"}
                            color={color}/>
                        <TextInput
                            labelText={"Электронная почта"}
                            placeholder={"tretiakovvvvv@gmail.com"}
                            color={color}/>
                        <TextInput
                            labelText={"Номер телефона"}
                            placeholder={"+7 (913) 939-11-94"}
                            color={color}/>
                    </div>

                    <div className={style.settingsButtons}>
                        <Button
                            buttonText={"Сохранить изменения"}
                            onClick={() => setPopupVisible(true)}
                        />
                        <Button buttonText={"Подтвердить номер телефона"} type={"secondary"}/>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProfileSettingsScreen