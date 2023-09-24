import mainStyle from "../../AdminPanel.module.css";
import style from "./ManagerList.module.css"
import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../ui/atoms/buttons/button/Button";
import EstablishmentGroup from "../../../../ui/wrappers/establishment-group/EstablishmentGroup";
import BranchCard from "../../../../ui/moleculas/branch-card/BranchCard";
import DropdownInput from "../../../../ui/atoms/inputs/dropdown-input/DropdownInput";

const ManagerListScreen = () => {
    return(
        <div className={mainStyle.layout}>

            <Sidebar activeTab={3}/>

            <div className={mainStyle.content}>

                <HeaderColumn header={"Список администраторов"}>

                    <div className={style.headerButton}>
                        <Button
                            buttonText={"Добавить администратора"}
                            icon={"plus.svg"}
                        />
                    </div>
                    <div className={style.headerDropdown}>
                        <DropdownInput>
                            <h5>Hello</h5>
                            <h5>My</h5>
                            <h5>Name</h5>
                        </DropdownInput>
                    </div>

                </HeaderColumn>

                <EstablishmentGroup header={"Аджикинежаль"}>
                    <BranchCard filial={"Третьяков Артём"} address={"ул. Военная, д. 136"}/>
                    <BranchCard filial={"Константинов Никита"} address={"ул. Советская, д. 32"}/>
                </EstablishmentGroup>

                <EstablishmentGroup header={"Горячий Цех"}>
                    <BranchCard filial={"Катешов Илья"} address={"ул. Советская, д. 32"}/>
                    <BranchCard filial={"Миронова Ксения"} address={"ул. Ляпунова, д. 12/1"}/>
                </EstablishmentGroup>

            </div>

        </div>
    )
}

export default ManagerListScreen