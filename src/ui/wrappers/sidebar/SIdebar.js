import style from "./Sidebar.module.css"
import Tab from "../../atoms/tab/Tab";
import TabColumn from "../../moleculas/tab-column/tab-column/TabColumn";
import {FiColumns, FiLogOut} from "react-icons/fi";
import BudleBusinessLogo from "../../atoms/svg/BudleBusinessLogo";

const Sidebar = ({activeTab}) => {
    return (
        <div className={style.layout}>
            <div className={style.group}>
                <BudleBusinessLogo/>
                <TabColumn activeTab={activeTab}/>
            </div>
            <div className={`${style.group} ${style.bottomGroup}`}>
                <div className={style.divider}></div>
                <div className={style.bottomTabCol}>
                    <Tab
                        tabId={1}
                        icon={
                            <FiColumns
                                size={"22px"}
                                className={"stroke-text-gray"}
                            />
                        }
                        text={"Свернуть меню"}/>
                    <Tab
                        tabId={2}
                        icon={
                            <FiLogOut
                                size={"22px"}
                                className={"stroke-message-wrong"}
                            />
                        }
                        text={"Выйти"}/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar