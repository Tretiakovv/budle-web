import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import PauseEstablishmentPopup from "../popups/pause-establishment/PauseEstablishmentPopup";
import {FiPauseCircle} from "react-icons/fi";
import OrderDesk from "../../../../../ui/wrappers/order-desk/OrderDesk";
import SideOrderPopup from "../../../../../ui/moleculas/popups/side-order-popup/SideOrderPopup";
import {useEffect, useState} from "react";
import {useUnit} from "effector-react";
import {$activeOrdersOption, $orderScreenOptions, setActiveOrdersOption} from "../../../../../models/orders/model";
import {getEstablishmentsFx} from "../../../../../models/establishment-list/model";
import AdminPanelWrapper from "../../../../../ui/wrappers/AdminPanelWrapper";

const OrderListScreen = () => {

    const [options, activeOption, setActiveOption] = useUnit([$orderScreenOptions, $activeOrdersOption, setActiveOrdersOption])
    const getEstablishments = useUnit(getEstablishmentsFx)

    const [isPausePopupVisible, setPausePopupVisible] = useState(false)
    const [selectedOrder, selectOrder] = useState(null)

    useEffect(() => {
        getEstablishments()
    }, []);

    if (options && activeOption) return (
        <div>
            {isPausePopupVisible && <PauseEstablishmentPopup
                onClose={() => setPausePopupVisible(false)}
            />}
            {selectedOrder && <SideOrderPopup
                onClosePopup={() => selectOrder(null)}
                order={selectedOrder}
            />}
            <AdminPanelWrapper>
                <HeaderColumn header={"Список заказов"}>
                    <div className={'col-span-8 gap-5 flex flex-row justify-center items-center'}>
                        <DropdownInput
                            placeholder={"Выберите заведение"}
                            selectedOption={activeOption}
                            selectOption={setActiveOption}
                            options={options}
                        />
                        <Button
                            onClick={() => setPausePopupVisible(true)}
                            icon={<FiPauseCircle size={"22px"}/>}
                            buttonText={"Приостановить работу"}
                            type={"secondary"}
                        />
                    </div>
                </HeaderColumn>
                <OrderDesk/>
            </AdminPanelWrapper>
        </div>
    )

}

export default OrderListScreen