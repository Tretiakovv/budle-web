import mainStyle from "../../../AdminPanel.module.css"
import style from "./ProfileSettings.module.css"

import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import TextInput from "../../../../../ui/atoms/inputs/text-input/TextInput";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import SuccessPopup from "../../../../../ui/moleculas/popups/success-popup/SuccessPopup";
import {useProfileStore} from "../store/ProfileStore";
import {useUnit} from "effector-react";
import {$me, getMeFx} from "../../../../../models/auth/auth";
import {useEffect} from "react";

const ProfileSettingsScreen = () => {

    const [me, getMe] = useUnit([$me, getMeFx])

    const color = "#EEF5F9"
    const profileStore = useProfileStore()

    useEffect(() => {
        getMe()
    }, []);

    return (
        <div className={mainStyle.layout}>

            <Sidebar activeTab={2}/>

            {
                profileStore.isPopupVisible ? <SuccessPopup
                    image={"rocket.png"}
                    header={"Данные успешно сохранены!"}
                    message={"Мы отправили Вам на почту письмо с новым паролем"}
                    buttonText={"Прекрасно!"}
                    onClose={() => profileStore.setPopupVisible(false)}
                /> : null
            }

            <div className={mainStyle.content}>

                <HeaderColumn header={"Настройки"}/>

                {
                    me && <div className={style.settings}>

                        <div className={style.settingsInput}>
                            <TextInput
                                labelText={"ФИО"}
                                placeholder={`${me.middleName} ${me.firstName} ${me.lastName}`}
                                color={color}/>
                            <TextInput
                                labelText={"Электронная почта"}
                                placeholder={me.email}
                                color={color}/>
                            <TextInput
                                labelText={"Номер телефона"}
                                placeholder={me.phoneNumber}
                                color={color}/>
                        </div>

                        <Button
                            buttonText={"Сохранить изменения"}
                            onClick={() => profileStore.setPopupVisible(true)}
                        />

                    </div>
                }

            </div>

        </div>
    )
}

export default ProfileSettingsScreen