import mainStyle from "../../AdminPanel.module.css"
import style from "./EstablishmentList.module.css"

import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import EstablishmentGroup from "../../../../ui/wrappers/establishment-group/EstablishmentGroup";
import BranchCard from "../../../../ui/moleculas/branch-card/BranchCard";
import Button from "../../../../ui/atoms/buttons/button/Button.js";
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";
import {FiSearch} from "react-icons/fi";
import EstablishmentList from "../../../../ui/wrappers/establishment-list/EstablishmentList";
import establishmentData from "../../../../data/EstablishmentData";

const EstablishmentListScreen = () => {
    return (
        <div className={mainStyle.layout}>

            <Sidebar activeTab={1}/>

            <div className={mainStyle.content}>

                <HeaderColumn header={"Список заведений"}>

                    <div className={style.headerButton}>
                        <Button
                            buttonText={"Добавить заведение"}
                            icon={"plus.svg"}
                        />
                    </div>

                    <div className={style.headerInput}>
                        <TextInput
                            placeholder={"Все заведения"}
                            icon={
                                <FiSearch
                                    size={"22px"}
                                    className={"stroke-text-gray"}
                                />
                            }
                        />
                    </div>

                </HeaderColumn>

                <EstablishmentList data={establishmentData} />

            </div>

        </div>
    );
}


export default EstablishmentListScreen;
