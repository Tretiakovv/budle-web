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
import {useOrderStore} from "../store/OrderStore";
import {useEstablishmentFilterStore} from "../../store/EstablishmentFilterStore";
import {useEffect, useState} from "react";

const OrderListScreen = () => {

    const orderStore = useOrderStore()
    const establishmentFilterStore = useEstablishmentFilterStore()
    const [isPausePopupVisible, setPausePopupVisible] = useState(false)

    useEffect(() => {
        establishmentFilterStore.filterBranches()
    }, [establishmentFilterStore.selectedEstablishment])

    const contentPosition = isPausePopupVisible || orderStore.selectedOrder !== null
        ? "fixed" : "relative"

    return (
        <div>

            {
                isPausePopupVisible ? <PauseEstablishmentPopup
                    onClose={() => setPausePopupVisible(false)}/> : null
            }

            {
                orderStore.selectedOrder !== null ? <SideOrderPopup
                    order={orderStore.selectedOrder}
                    onClosePopup={() => orderStore.selectOrder(null)}
                /> : null
            }

            <div
                style={{position: contentPosition}}
                className={mainStyle.layout}
            >

                <Sidebar activeTab={5}/>

                <div className={mainStyle.content}>

                    <HeaderColumn header={"Редактирование заведения"}>

                        <div className={style.headerInputRow}>
                            <DropdownInput
                                selectedOption={establishmentFilterStore.selectedEstablishment}
                                selectOption={(tag) => establishmentFilterStore.selectEstablishment(tag)}
                                placeholder={"Выберите заведение"}
                                options={establishmentFilterStore.establishmentTagData}
                            />
                            <DropdownInput
                                selectedOption={establishmentFilterStore.selectedBranch}
                                selectOption={(tag) => establishmentFilterStore.selectBranch(tag)}
                                placeholder={"Выберите филиал"}
                                options={establishmentFilterStore.branchTagData}
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

                    <OrderDesk
                        orders={orderStore.orders}
                        onSelectOrder={(order) => orderStore.selectOrder(order)
                    }/>

                </div>

            </div>
        </div>
    )
}

export default OrderListScreen