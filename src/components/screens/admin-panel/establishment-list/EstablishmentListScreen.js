import style from "./EstablishmentList.module.css"
import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import EstablishmentGroup from "../../../../ui/wrappers/establishment-group/EstablishmentGroup";
import EstablishmentRow from "../../../../ui/moleculas/establishment-row/EstablishmentRow";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../ui/atoms/buttons/button/Button.js";
import DropdownInput from "../../../../ui/atoms/inputs/dropdown-input/DropdownInput";

const EstablishmentListScreen = () => {
    return (
        <div className={style.layout}>
            <Sidebar/>
            <div className={style.bg}>
                <HeaderColumn header={"Список заведений"}>
                    <Button buttonText={"Добавить заведение"} icon={"plus.svg"}/>
                    <DropdownInput defaultText={"Все заведения"}/>
                </HeaderColumn>
                <div className={style.content}>

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
        </div>
    );
}


export default EstablishmentListScreen;
