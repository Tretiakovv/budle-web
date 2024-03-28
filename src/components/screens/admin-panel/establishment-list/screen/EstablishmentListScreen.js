import mainStyle from "../../../AdminPanel.module.css"
import style from "./EstablishmentList.module.css"

import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import Button from "../../../../../ui/atoms/buttons/button/Button.js";
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import {FiPlus} from "react-icons/fi";
import EstablishmentList from "../../../../../ui/wrappers/establishment-list/EstablishmentList";
import {useState} from "react";
import AddEstablishmentPopup from "../popups/add-establishment/AddEstablishmentPopup";
import {useStore} from "../../../../../store/store";
import {useQuery} from "react-query";
import TextInput from "../../../../../ui/atoms/inputs/text-input/TextInput";
import {useShallow} from "zustand/react/shallow";

const EstablishmentListScreen = () => {

    const [addEstablishmentVisible, setVisible] = useState(false)
    const [name, setName] = useState("")

    const [establishmentList, getEstablishmentList] = useStore(
        useShallow(state => [state.establishmentList, state.getEstablishmentList])
    )

    const getEstablishmentListQuery = useQuery({
        queryKey: ["get", "establishmentList"],
        queryFn: () => getEstablishmentList()
    })

    if (getEstablishmentListQuery.isLoading) {
        return (
            <div>
                Establishments is loading..
            </div>
        )
    }

    if (getEstablishmentListQuery.isSuccess) {
        return (
            <div className={mainStyle.layout}>

                <Sidebar activeTab={1}/>

                {
                    addEstablishmentVisible && <AddEstablishmentPopup
                        onClick={() => setVisible(false)}
                    />
                }

                <div className={mainStyle.content}>

                    <HeaderColumn header={"Список заведений"}>
                        <div className={style.headerButton}>
                            <Button
                                buttonText={"Добавить заведение"}
                                onClick={() => setVisible(true)}
                                icon={<FiPlus size={"22px"} stroke={"white"}/>}
                            />
                        </div>
                        <div className={"col-span-5"}>
                            <TextInput
                                placeholder={"Введите название заведения"}
                                value={name}
                                onChange={setName}
                            />
                        </div>
                    </HeaderColumn>

                    <EstablishmentList data={establishmentList}/>

                </div>

            </div>
        );
    }

}


export default EstablishmentListScreen
