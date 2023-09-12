import mainStyle from "../../AdminPanel.module.css"

import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import EstablishmentGroup from "../../../../ui/wrappers/establishment-group/EstablishmentGroup";
import EstablishmentRow from "../../../../ui/moleculas/establishment-row/EstablishmentRow";
import Button from "../../../../ui/atoms/buttons/button/Button.js";
import DropdownInput from "../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";

const EstablishmentListScreen = () => {
    return (
        <div className={mainStyle.layout}>

            <Sidebar/>

            <div className={mainStyle.content}>

                <HeaderColumn header={"Список заведений"}>
                    <Button buttonText={"Добавить заведение"} icon={"plus.svg"}/>
                    <TextInput placeholder={"Все заведения"}/>
                </HeaderColumn>

                <EstablishmentGroup header={"Аджикинежаль"}>
                    <EstablishmentRow filial={"ул. Советская, д.50"} address={"м. Площадь Ленина"}/>
                    <EstablishmentRow filial={"ул. Военная, д. 136"}/>
                </EstablishmentGroup>

                <EstablishmentGroup header={"Горячий Цех"}>
                    <EstablishmentRow filial={"ул. Ольги Жилиной, д. 12"}/>
                    <EstablishmentRow filial={"ул. Пирогова, д. 2"} address={"Академгородок"}/>
                </EstablishmentGroup>

            </div>

        </div>
    );
}


export default EstablishmentListScreen;
