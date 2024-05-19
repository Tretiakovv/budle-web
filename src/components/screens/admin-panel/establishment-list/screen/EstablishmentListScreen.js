import mainStyle from "../../../AdminPanel.module.css"
import style from "./EstablishmentList.module.css"

import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import Button from "../../../../../ui/atoms/buttons/button/Button.js";
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import {FiPlus} from "react-icons/fi";
import EstablishmentList from "../../../../../ui/wrappers/establishment-list/EstablishmentList";
import {useEffect, useState} from "react";
import AddEstablishmentPopup from "../popups/add-establishment/AddEstablishmentPopup";
import {useStore} from "../../../../../store/store";
import {useQuery} from "react-query";
import TextInput from "../../../../../ui/atoms/inputs/text-input/TextInput";
import {useShallow} from "zustand/react/shallow";
import {useNavigate} from "react-router-dom";
import {useUnit} from "effector-react";
import {$establishments, getEstablishmentsFx} from "../../../../../models/establishment-list/model";
import DeleteBranchPopup from "../popups/delete-branch/DeleteBranchPopup";

const EstablishmentListScreen = () => {

    const [establishments, getEstablishments] = useUnit([$establishments, getEstablishmentsFx])
    const [itemToDelete, setItemToDelete] = useState(false)

    const navigate = useNavigate()
    const [name, setName] = useState("")

    useEffect(() => {
        getEstablishments(name)
    }, [name]);

    return (
        <div className={mainStyle.layout}>
            {
                itemToDelete && <DeleteBranchPopup
                    establishment={itemToDelete}
                    onClose={() => setItemToDelete(null)}
                />
            }
            <Sidebar activeTab={1}/>
            <div className={mainStyle.content}>
                <HeaderColumn header={"Список заведений"}>
                    <div className={style.headerButton}>
                        <Button
                            buttonText={"Добавить заведение"}
                            onClick={() => navigate('/establishment/new')}
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
                {establishments &&
                    <EstablishmentList
                        onDelete={setItemToDelete}
                        data={establishments}
                    />
                }
            </div>
        </div>
    );

}


export default EstablishmentListScreen
