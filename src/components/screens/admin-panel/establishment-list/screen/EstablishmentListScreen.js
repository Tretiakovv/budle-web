import mainStyle from "../../../AdminPanel.module.css"
import style from "./EstablishmentList.module.css"

import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import Button from "../../../../../ui/atoms/buttons/button/Button.js";
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import {FiPlus} from "react-icons/fi";
import EstablishmentList from "../../../../../ui/wrappers/establishment-list/EstablishmentList";
import DeleteBranchPopup from "../popups/delete-branch/DeleteBranchPopup";
import {useEffect, useState} from "react";
import AddEstablishmentPopup from "../popups/add-establishment/AddEstablishmentPopup";
import {useEstablishmentStore} from "../../store/EstablishmentStore";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import {useEstablishmentFilterStore} from "../../store/EstablishmentFilterStore";
import {useShallow} from "zustand/shallow";

const EstablishmentListScreen = () => {

    const establishmentStore = useEstablishmentStore()

    const [
        selectedEstablishment,
        onSelectEstablishment,
        establishmentTagData
    ] = useEstablishmentFilterStore(
        useShallow((state) => ([
            state.selectedEstablishment,
            (tag) => state.selectEstablishment(tag),
            state.establishmentTagData
        ]))
    )

    const [addEstablishmentVisible, setVisible] = useState(false)

    useEffect(() => {
        establishmentStore.getEstablishments()
    }, [])

    useEffect(() => {
        establishmentStore.filterEstablishments(selectedEstablishment.name)
    }, [selectedEstablishment.name])

    return (
        <div className={mainStyle.layout}>

            <Sidebar activeTab={1}/>

            {
                addEstablishmentVisible ?
                    <AddEstablishmentPopup
                        onClick={() => setVisible(false)}
                    /> : null
            }

            {
                establishmentStore.branchToDelete === null ? null :
                    <DeleteBranchPopup
                        establishmentName={establishmentStore.branchToDelete.establishmentName}
                        branch={establishmentStore.branchToDelete.branch}
                        onClose={() => establishmentStore.selectBranch(null)}
                        onDelelte={() => establishmentStore.deleteBranch(
                            establishmentStore.branchToDelete
                        )}
                    />

            }

            <div className={mainStyle.content}>

                <HeaderColumn header={"Список заведений"}>

                    <div className={style.headerButton}>
                        <Button
                            buttonText={"Добавить заведение"}
                            onClick={() => setVisible(true)}
                            icon={<FiPlus size={"22px"} stroke={"white"} />}
                        />
                    </div>

                    <div className={style.headerInput}>
                        <DropdownInput
                            selectedOption={selectedEstablishment}
                            selectOption={(tag) => onSelectEstablishment(tag)}
                            placeholder={"Выберите заведение"}
                            options={establishmentTagData}
                        />
                    </div>

                </HeaderColumn>

                <EstablishmentList
                    data={establishmentStore.establishmentList}
                    isManager={false}
                    onClick={(selectedBranch) => {
                        establishmentStore.selectBranch(selectedBranch)
                    }}
                />

            </div>

        </div>
    );
}


export default EstablishmentListScreen
