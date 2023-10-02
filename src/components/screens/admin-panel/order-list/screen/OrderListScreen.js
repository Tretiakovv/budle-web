import mainStyle from "../../../AdminPanel.module.css";
import style from "./OrderListScreen.module.css";

import Sidebar from "../../../../../ui/wrappers/sidebar/SIdebar";
import HeaderColumn from "../../../../../ui/wrappers/header-column/HeaderColumn";
import Button from "../../../../../ui/atoms/buttons/button/Button";
import options from "../../../../../data/entity/OptionData";
import DropdownInput from "../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import PauseEstablishmentPopup from "../popups/pause-establishment/PauseEstablishmentPopup";
import {useState} from "react";
import {FiPauseCircle} from "react-icons/fi";
import OrderDesk from "../../../../../ui/wrappers/order-desk/OrderDesk";

const OrderListScreen = () => {

    const [selectedEstablishment, selectEstablishment] = useState({id: 0, name: ""})
    const [selectedBranch, selectBranch] = useState({id: 0, name: ""})

    const [isEstablishmentPausedPopupVisible, setEstablishmentPausedPopupVisible] = useState(false)
    const contentPosition = isEstablishmentPausedPopupVisible ? "fixed" : "relative"

    return (
        <div>

            {
                isEstablishmentPausedPopupVisible ? <PauseEstablishmentPopup
                    onClose={() => setEstablishmentPausedPopupVisible(false)}/> : null
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
                                selectedOption={selectedEstablishment}
                                selectOption={(establishment) => selectEstablishment(establishment)}
                                placeholder={"Выберите заведение"}
                                options={options}
                            />
                            <DropdownInput
                                selectedOption={selectedBranch}
                                selectOption={(branch) => selectBranch(branch)}
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
                                onClick={() => setEstablishmentPausedPopupVisible(true)}
                            />
                        </div>

                    </HeaderColumn>

                    <OrderDesk />

                </div>

            </div>
        </div>
    )
}

export default OrderListScreen