import mainStyle from "../../AdminPanel.module.css";
import style from "./ManagerList.module.css"
import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../ui/atoms/buttons/button/Button";
import DropdownInput from "../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import EstablishmentList from "../../../../ui/wrappers/establishment-list/EstablishmentList";
import establishmentData from "../../../../data/EstablishmentData";

const ManagerListScreen = () => {
    return (
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

                <EstablishmentList data={establishmentData} isManager={true}/>

            </div>

        </div>
    )
}

export default ManagerListScreen