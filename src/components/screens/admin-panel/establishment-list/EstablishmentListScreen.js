import mainStyle from "../../AdminPanel.module.css"

import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import EstablishmentGroup from "../../../../ui/wrappers/establishment-group/EstablishmentGroup";
import FilialCard from "../../../../ui/moleculas/filial-card/FilialCard";
import Button from "../../../../ui/atoms/buttons/button/Button.js";
import DropdownInput from "../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";

const EstablishmentListScreen = () => {
    return (
        <div className={mainStyle.layout}>

            <Sidebar activeTab={1}/>

            <div className={mainStyle.content}>

                <HeaderColumn header={"Список заведений"}>
                    <Button buttonText={"Добавить заведение"} icon={"plus.svg"}/>
                    <TextInput placeholder={"Все заведения"}/>
                </HeaderColumn>

                <EstablishmentGroup header={"Аджикинежаль"}>
                    <FilialCard filial={"ул. Советская, д.50"} address={"м. Площадь Ленина"}/>
                    <FilialCard filial={"ул. Военная, д. 136"}/>
                </EstablishmentGroup>

                <EstablishmentGroup header={"Горячий Цех"}>
                    <FilialCard filial={"ул. Ольги Жилиной, д. 12"}/>
                    <FilialCard filial={"ул. Пирогова, д. 2"} address={"Академгородок"}/>
                </EstablishmentGroup>

            </div>

        </div>
    );
}


export default EstablishmentListScreen;
