import mainStyle from "../../AdminPanel.module.css"
import style from "./EstablishmentMenu.module.css"
import HeaderColumn from "../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../ui/atoms/buttons/button/Button";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";
import {FiSearch} from "react-icons/fi";
import Sidebar from "../../../../ui/wrappers/sidebar/SIdebar";
import FilterRow from "../../../../ui/atoms/rows/filter-row/FilterRow";
import MenuList from "../../../../ui/moleculas/menu-list/MenuList";
import data from "../../../../data/MenuData";

const EstablishmentMenuScreen = () => {

    return (
        <div className={mainStyle.layout}>

            <Sidebar activeTab={4}/>

            <div className={mainStyle.content}>

                <HeaderColumn header={"Меню заведения"}>

                    <div className={style.headerButton}>
                        <Button buttonText={`Редактировать меню`}/>
                    </div>

                    <div className={style.headerInputRow}>
                        <TextInput
                            placeholder={"Аджикинежаль"}
                            icon={
                                <FiSearch
                                    size={"22px"}
                                    className={"stroke-text-gray"}
                                />
                            }
                        />
                    <TextInput
                        placeholder={"ул. Советская 32"}
                        icon={
                            <FiSearch
                                size={"22px"}
                                className={"stroke-text-gray"}
                            />
                        }
                    />
                    </div>

                </HeaderColumn>

                <FilterRow />

                <MenuList data={data}/>

            </div>

        </div>
    )
}

export default EstablishmentMenuScreen