import style from "./TabColumn.module.css"
import {useState} from "react";
import Tab from "../../../atoms/tab/Tab";

const TabColumn = (props) => {

    const [activeTab, setActiveTab] = useState(props.activeTab)

    return (
        <div className={style.layout}>
            <Tab tabId={1} activeTab={activeTab} text={"Список заведений"} icon={"home.svg"} />
            <Tab tabId={2} activeTab={activeTab} text={"Настройки профиля"} icon={"settings.svg"} />
            <Tab tabId={3} activeTab={activeTab} text={"Список менеджеров"} icon={"users.svg"} />
            <Tab tabId={4} activeTab={activeTab} text={"Меню заведения"} icon={"file.svg"} />
            <Tab tabId={5} activeTab={activeTab} text={"Список заказов"} icon={"layers.svg"} />
        </div>
    )
}

export default TabColumn