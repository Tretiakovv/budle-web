import mainStyle from "../../../AdminPanel.module.css";
import style from "./OrderListScreen.module.css";

import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import PauseEstablishmentPopup from "../popups/pause-establishment/PauseEstablishmentPopup";
import {FiPauseCircle} from "react-icons/fi";
import OrderDesk from "../../../../../ui/wrappers/order-desk/OrderDesk";
import SideOrderPopup from "../../../../../ui/moleculas/popups/side-order-popup/SideOrderPopup";
import {useEstablishmentFilterStore} from "../../store/EstablishmentFilterStore";
import {useEffect, useState} from "react";
import {useStore} from "../../../../../store/store";
import {useShallow} from "zustand/react/shallow";
import {useQuery} from "react-query";
import {mapEstablishmentsToOptions} from "../../../../../utils/mapEstablishmentsToOptions";
import {useSearchParams} from "react-router-dom";

const OrderListScreen = () => {

    const [isPausePopupVisible, setPausePopupVisible] = useState(false)
    const [activeEstOption, setActiveEstOption] = useState({id : 0, name : ""})
    const [searchParams, setSearchParams] = useSearchParams()

    const [selectedOrder, selectOrder] = useStore(
        useShallow(state => [state.selectedOrder, state.selectOrder])
    )

    const [establishments, getEstablishments] = useStore(
        useShallow(state => [state.establishmentList, state.getEstablishmentList])
    )

    const options = mapEstablishmentsToOptions(establishments)

    const getEstablishmentsQuery = useQuery({
        queryKey : ["get", "establishmentList"],
        queryFn : () => getEstablishments(),
    })

    const handleChangeOption = (option) => {
        setSearchParams(prev => {
            prev.set("establishmentId", option.id)
            return prev
        })
        setActiveEstOption(option)
    }

    const contentPosition = isPausePopupVisible || selectedOrder !== null ? "fixed" : "relative"

    useEffect(() => {
        setSearchParams(prev => {
            prev.set("establishmentId", null)
            return prev
        })
    }, [])

    if (getEstablishmentsQuery.isLoading) {
        return (
            <div>
                Establishments is loading..
            </div>
        )
    }

    if (getEstablishmentsQuery.isSuccess) {
        return (
            <div>

                {
                    isPausePopupVisible ? <PauseEstablishmentPopup
                        onClose={() => setPausePopupVisible(false)}/> : null
                }

                {
                    selectedOrder !== null ? <SideOrderPopup
                        order={selectedOrder}
                        onClosePopup={() => selectOrder(null)}
                    /> : null
                }

                <div
                    style={{position: contentPosition}}
                    className={mainStyle.layout}
                >

                    <Sidebar activeTab={5}/>

                    <div className={mainStyle.content}>

                        <HeaderColumn header={"Список заказов"}>

                            <div className={style.headerInputRow}>
                                <DropdownInput
                                    selectedOption={activeEstOption}
                                    selectOption={handleChangeOption}
                                    placeholder={"Выберите заведение"}
                                    options={options}
                                />
                                <Button
                                    buttonText={"Приостановить работу"}
                                    type={"secondary"}
                                    icon={
                                        <FiPauseCircle
                                            size={"22px"}
                                            className={style.icon}
                                        />
                                    }
                                    onClick={() => setPausePopupVisible(true)}
                                />
                            </div>

                        </HeaderColumn>

                        <OrderDesk />

                    </div>

                </div>
            </div>
        )
    }

}

export default OrderListScreen