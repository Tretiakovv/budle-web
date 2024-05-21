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
import {useEffect, useState} from "react";
import TokenPopup from "./TokenPopup";

const ProfileSettingsScreen = () => {

    const [me, getMe] = useUnit([$me, getMeFx])
    const [tokenPopup, setTokenPopup] = useState(false)

    const color = "#EEF5F9"
    const profileStore = useProfileStore()

    useEffect(() => {
        getMe()
    }, []);

    return (
        <div className={mainStyle.layout}>
            <Sidebar activeTab={2}/>
            {tokenPopup && <TokenPopup onClose={() => setTokenPopup(false)}/>}
            {profileStore.isPopupVisible && <SuccessPopup
                message={"Мы отправили Вам на почту письмо с новым паролем"}
                onClose={() => profileStore.setPopupVisible(false)}
                header={"Данные успешно сохранены!"}
                buttonText={"Прекрасно!"}
                image={"rocket.png"}
            />}
            <div className={mainStyle.content}>
                <HeaderColumn header={"Настройки"}/>
                {me && <div className={style.settings}>
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
                    <div className={'w-[500px] flex flex-row items-center gap-4'}>
                        <Button
                            buttonText={"Сохранить изменения"}
                            onClick={() => profileStore.setPopupVisible(true)}
                        />
                        <Button
                            type={'secondary'}
                            buttonText={"Получить токен"}
                            onClick={() => setTokenPopup(true)}
                        />
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default ProfileSettingsScreen