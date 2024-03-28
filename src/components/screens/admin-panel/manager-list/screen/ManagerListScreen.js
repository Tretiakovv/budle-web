import mainStyle from "../../../AdminPanel.module.css";
import style from "./ManagerList.module.css"
import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import {useState} from "react";
import AddManagerPopup from "../popups/AddManagerPopup";
import SuccessPopup from "../../../../../ui/moleculas/popups/success-popup/SuccessPopup";
import EmptyScreen from "../../../../../ui/wrappers/empty-screen/EmptyScreen";
import {FiPlus} from "react-icons/fi";
import {useStore} from "../../../../../store/store";
import {useShallow} from "zustand/react/shallow";
import {useQuery} from "react-query";
import WorkerCard from "../../../../../ui/moleculas/worker-card/WorkerCard";
import DeleteWorkerPopup from "../popups/DeleteWorkerPopup";

const ManagerListScreen = () => {

    const [isDeletePopupVisible, setDeletePopupVisible] = useState(null)
    const [managerPopupVisible, setManagerPopupVisible] = useState(false)
    const [successPopupVisible, setSuccessPopupVisible] = useState(false)

    const [workers, getWorkers] = useStore(useShallow(
        state => [state.workers, state.getWorkers])
    )

    const [establishments, getEstablishments] = useStore(
        useShallow(state => [state.establishmentList, state.getEstablishmentList])
    )

    const [options, setOptions] = useState([])
    const [activeOption, setActiveOption] = useState({id: 0, name: ""})

    const mapEstablishmentsToOptions = () => {
        return establishments.map(establishment => {
            return {id: establishment.id, name: establishment.name}
        })
    }

    const getEstablishmentsQuery = useQuery({
        queryKey: ["get", "establishmentList"],
        queryFn: () => getEstablishments(),
        onSuccess: () => setOptions(mapEstablishmentsToOptions)
    })

    const getWorkersQuery = useQuery({
        queryKey: ["get", "workers", activeOption.id],
        queryFn: () => getWorkers(activeOption.id),
        onSuccess: () => console.log("WORKERS")
    })

    const onSubmitManagerPopup = () => {
        setManagerPopupVisible(false)
        setSuccessPopupVisible(true)
    }

    if (getEstablishmentsQuery.isLoading || getWorkersQuery.isLoading) {
        return (
            <div>
                Manager list is loading..
            </div>
        )
    }

    return (
        <div className={mainStyle.layout}>

            <Sidebar activeTab={3}/>

            {
                isDeletePopupVisible && <DeleteWorkerPopup
                    worker={isDeletePopupVisible}
                    establishmentId={activeOption.id}
                    onClose={() => setDeletePopupVisible(null)}
                />
            }

            {
                managerPopupVisible && <AddManagerPopup
                    onClose={() => setManagerPopupVisible(false)}
                    onSubmit={() => onSubmitManagerPopup()}
                />
            }

            {
                successPopupVisible ? <SuccessPopup
                    image={"rocket.png"}
                    header={"Приглашение отправлено"}
                    message={"На почту администратора отправлено приглашение с логином и паролем"}
                    buttonText={"Прекрасно!"}
                    onClose={() => setSuccessPopupVisible(false)}
                /> : null
            }

            <div className={mainStyle.content}>

                <HeaderColumn header={"Список администраторов"}>

                    <div className={style.headerButton}>
                        <Button
                            icon={<FiPlus size={"22px"} stroke={"white"}/>}
                            buttonText={"Добавить администратора"}
                            onClick={() => setManagerPopupVisible(true)}
                        />
                    </div>
                    <div className={style.headerDropdown}>
                        <DropdownInput
                            selectedOption={activeOption}
                            selectOption={setActiveOption}
                            placeholder={"Выберите заведение"}
                            options={options}
                        />
                    </div>

                </HeaderColumn>

                {
                    activeOption.id === 0 || workers === null ? <EmptyScreen
                        header={"Вы не выбрали организацию"}
                        message={"Выберите организацию и мы покажем Вам список всех менеджеров в ней"}
                    /> : <div className={"w-full grid grid-cols-12 gap-[10px]"}>
                        {
                            workers.map((worker) => <WorkerCard
                                worker={worker}
                                onDelete={() => setDeletePopupVisible(worker)}
                            />)
                        }
                    </div>
                }

            </div>

        </div>
    )
}

export default ManagerListScreen