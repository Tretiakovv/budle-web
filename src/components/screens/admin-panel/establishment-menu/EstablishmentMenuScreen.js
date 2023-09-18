import mainStyle from "../../AdminPanel.module.css"
import style from "./EstablishmentMenu.module.css"
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../ui/atoms/buttons/button/Button";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";

const EstablishmentMenuScreen = () => {
    return(
        <div className={mainStyle.layout}>
            <HeaderColumn header={"Меню заведения"}>
                <Button buttonText={`Редактировать меню`} />
                <TextInput placeholder={"Аджикинежаль"} icon={""}/>
                <TextInput placeholder={"ул. Советская 32"} icon={""}/>
            </HeaderColumn>

        </div>
    )
}

export default EstablishmentMenuScreen