import mainStyle from "../../AdminPanel.module.css"

import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";

const ProfileSettingsScreen = () => {

    return (
        <div className={mainStyle.layout}>

            <Sidebar/>

            <div className={mainStyle.content}>

                <HeaderColumn header={"Настройки"}/>

                <TextInput labelText={"ФИО"} placeholder={"Третьяков Артём Александрович"}/>
                <TextInput labelText={"Электронная почта"} placeholder={"tretiakovvvvv@gmail.com"}/>
                <TextInput labelText={"Номер телефона"} placeholder={"+7 (913) 939-11-94"}/>

            </div>

        </div>
    )
}

export default ProfileSettingsScreen