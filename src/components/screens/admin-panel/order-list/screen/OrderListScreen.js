import mainStyle from "../../../AdminPanel.module.css";
import style from "./OrderListScreen.module.css";

import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import options from "../../../../../data/entity/OptionData";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import PauseEstablishmentPopup from "../popups/pause-establishment/PauseEstablishmentPopup";
import {FiPauseCircle} from "react-icons/fi";
import OrderDesk from "../../../../../ui/wrappers/order-desk/OrderDesk";
import SideOrderPopup from "../../../../../ui/moleculas/popups/side-order-popup/SideOrderPopup";
import {useOrderStore} from "../store/OrderStore";
import {useEstablishmentStore} from "../store/EstablishmentStore";

const OrderListScreen = () => {

    const orderStore = useOrderStore()
    const establishmentStore = useEstablishmentStore()

    const contentPosition = establishmentStore.popupVisible || orderStore.selectedOrder !== null
        ? "fixed" : "relative"

    return (
        <div>

            {
                establishmentStore.popupVisible ? <PauseEstablishmentPopup
                    onClose={() => establishmentStore.setPopupVisible(false)}/> : null
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
                                selectedOption={establishmentStore.selectedEstablishmentTag}
                                selectOption={(tag) => establishmentStore.selectEstablishmentTag(tag)}
                                placeholder={"Выберите заведение"}
                                options={options}
                            />
                            <DropdownInput
                                selectedOption={establishmentStore.selectedBranchTag}
                                selectOption={(tag) => establishmentStore.selectBranchTag(tag)}
                                placeholder={"Выберите филиал"}
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
                                onClick={() => establishmentStore.setPopupVisible(true)}
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