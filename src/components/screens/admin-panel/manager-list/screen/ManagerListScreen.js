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
    $workers, $workerToDelete,
    getAllWorkersFx,
    setManagerScreenActiveOption,
    setWorkerToDeleteEvent
} from "../../../../../models/workers/model";
import AdminPanelWrapper from "../../../../../ui/wrappers/AdminPanelWrapper";
import AddWorkerPopup from "../popups/AddWorkerPopup";
import DeleteWorkerPopup from "../popups/DeleteWorkerPopup";

const ManagerListScreen = () => {

    const [workers, getWorkers] = useUnit([$workers, getAllWorkersFx])
    const [options, getEstablishments] = useUnit([$managerScreenOptions, getEstablishmentsFx])
    const [activeOption, setActiveOption] = useUnit([$managerScreenActiveOption, setManagerScreenActiveOption])

    const [workerToDelete, setWorkerToDelete] = useUnit([$workerToDelete, setWorkerToDeleteEvent])
    const [managerPopupVisible, setManagerPopupVisible] = useState(false)

    useEffect(() => {
        getEstablishments()
    }, []);

    if (options && activeOption) return (
        <AdminPanelWrapper>
            {managerPopupVisible && <AddWorkerPopup onClose={() => setManagerPopupVisible(false)}/>}
            {workerToDelete && <DeleteWorkerPopup onClose={() => setWorkerToDelete(null)}/>}
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
                    onDelete={() => setWorkerToDelete(worker)}
                    worker={worker}
                />)}
            </div>
        </AdminPanelWrapper>
    )
}

export default ManagerListScreen