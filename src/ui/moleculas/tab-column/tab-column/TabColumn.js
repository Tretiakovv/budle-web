import style from "./TabColumn.module.css";
import Tab from "../../../atoms/tab/Tab";
import {useNavigate} from "react-router-dom";

import {FiSettings} from "react-icons/fi";
import {FiHome} from "react-icons/fi";
import {FiUsers} from "react-icons/fi";
import {FiFile} from "react-icons/fi";
import {FiLayers} from "react-icons/fi";

const TabColumn = ({activeTab}) => {

    const navigate = useNavigate()

    return (
        <div className={style.layout}>
            <Tab tabId={1} activeTab={activeTab} text={"Список заведений"} icon={<FiHome size={"22px"}/>}
                onClick={() => navigate("/establishment-list")}/>
            <Tab tabId={2} activeTab={activeTab} text={"Настройки профиля"} icon={<FiSettings size={"22px"}/>}
                 onClick={() => navigate("/settings")}/>
            <Tab tabId={3} activeTab={activeTab} text={"Список менеджеров"} icon={<FiUsers size={"22px"}/>}
                 onClick={() => navigate("/manager-list")}/>
            <Tab tabId={4} activeTab={activeTab} text={"Меню заведения"} icon={<FiFile size={"22px"}/>}
                 onClick={() => navigate("/establishment-menu")}/>
            <Tab tabId={5} activeTab={activeTab} text={"Список заказов"} icon={<FiLayers size={"22px"}/>}
                 onClick={() => navigate("/order-list")}/>
        </div>
    )
}

export default TabColumn