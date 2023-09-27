import mainStyle from "../../../AdminPanel.module.css"
import style from "./EstablishmentList.module.css"

import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import Button from "../../../../../ui/atoms/buttons/button/Button.js";
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import TextInput from "../../../../../ui/atoms/inputs/text-input/TextInput";
import {FiSearch} from "react-icons/fi";
import EstablishmentList from "../../../../../ui/wrappers/establishment-list/EstablishmentList";
import establishmentData from "../../../../../data/EstablishmentData";
import DeleteBranchPopup from "../popups/delete-branch/DeleteBranchPopup";
import {useState} from "react";
import AddEstablishmentPopup from "../popups/add-establishment/AddEstablishmentPopup";

const EstablishmentListScreen = () => {

    const [addEstablishmentVisible, setVisible] = useState(false);

    const [branchToDelete, selectBranch] = useState(null)
    const [establishmentCollection, setCollection] = useState(establishmentData)

    const popupLayout = branchToDelete === null ? mainStyle.baseLayout : mainStyle.fixedLayout

    const updateCollection = () => {

        const filteredCollection = establishmentCollection.map(establishment => {
            if (establishment.establishmentName === branchToDelete.establishmentName) {
                const filteredBranches = establishment.branches.filter(branch =>
                    branch.address !== branchToDelete.branch.address
                )
                return {...establishment, branches: filteredBranches}
            } else return establishment
        })

        setCollection(filteredCollection)
        selectBranch(null)

    }

    return (
        <div className={popupLayout}>

            {
                addEstablishmentVisible ?
                    <AddEstablishmentPopup
                        onClick={() => setVisible(false)}
                    /> : null
            }

            {
                branchToDelete === null ? null :
                    <DeleteBranchPopup
                        establishmentName={branchToDelete.establishmentName}
                        branch={branchToDelete.branch}
                        onClose={() => selectBranch(null)}
                        onDelelte={() => updateCollection()}
                    />

            }

            <div className={mainStyle.layout}>

                <Sidebar activeTab={1}/>

                <div className={mainStyle.content}>

                    <HeaderColumn header={"Список заведений"}>

                        <div className={style.headerButton}>
                            <Button
                                buttonText={"Добавить заведение"}
                                onClick={() => setVisible(true)}
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

                    <EstablishmentList
                        data={establishmentCollection}
                        isManager={false}
                        onClick={(selectedBranch) => {
                            selectBranch(selectedBranch)
                        }}
                    />

                </div>

            </div>
        </div>
    );
}


export default EstablishmentListScreen;
