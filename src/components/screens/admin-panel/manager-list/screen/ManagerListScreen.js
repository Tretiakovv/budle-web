import style from "./ManagerList.module.css"
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import {useEffect, useState} from "react";
import {FiPlus} from "react-icons/fi";
import WorkerCard from "../../../../../ui/moleculas/worker-card/WorkerCard";
import {useUnit} from "effector-react";
import {getEstablishmentsFx} from "../../../../../models/establishment-list/model";
import {
    $managerScreenActiveOption,
    $managerScreenOptions,
    $workers,
    getAllWorkersFx,
    setManagerScreenActiveOption
} from "../../../../../models/workers/model";
import AdminPanelWrapper from "../../../../../ui/wrappers/AdminPanelWrapper";
import AddWorkerPopup from "../popups/AddWorkerPopup";

const ManagerListScreen = () => {

    const [workers, getWorkers] = useUnit([$workers, getAllWorkersFx])
    const [options, getEstablishments] = useUnit([$managerScreenOptions, getEstablishmentsFx])
    const [activeOption, setActiveOption] = useUnit([$managerScreenActiveOption, setManagerScreenActiveOption])

    const [isDeletePopupVisible, setDeletePopupVisible] = useState(null)
    const [managerPopupVisible, setManagerPopupVisible] = useState(false)

    const onSubmitManagerPopup = () => {
        setManagerPopupVisible(false)
        setSuccessPopupVisible(true)
    }

    useEffect(() => {
        getEstablishments()
        getWorkers()
    }, []);

    if (options && activeOption) return (
        <AdminPanelWrapper>
            {managerPopupVisible && <AddWorkerPopup onClose={() => setManagerPopupVisible(false)}/>}
            <HeaderColumn header={"Список администраторов"}>
                <div className={style.headerButton}>
                    <Button
                        icon={<FiPlus size={"22px"} stroke={"white"}/>}
                        buttonText={"Добавить администратора"}
                        onClick={() => setManagerPopupVisible(true)}
                    />
                </div>
                <DropdownInput
                    className={'col-span-5'}
                    selectedOption={activeOption}
                    selectOption={setActiveOption}
                    placeholder={"Выберите заведение"}
                    options={options}
                />
            </HeaderColumn>
            <div className={"w-full grid grid-cols-12 gap-[10px]"}>
                {workers?.map((worker) => <WorkerCard
                    onDelete={() => setDeletePopupVisible(worker)}
                    worker={worker}
                />)}
            </div>
        </AdminPanelWrapper>
    )
}

export default ManagerListScreen