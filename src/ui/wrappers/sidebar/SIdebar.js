import style from "./Sidebar.module.css"
import Tab from "../../atoms/tab/Tab";
import TabColumn from "../../moleculas/tab-column/tab-column/TabColumn";
import {FiColumns, FiLogOut} from "react-icons/fi";
import BudleBusinessLogo from "../../atoms/svg/BudleBusinessLogo";
import {useNavigate} from "react-router-dom";

const Sidebar = ({activeTab}) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem("ACCESS_TOKEN")
        navigate('/log-in')
    }

    return (
        <div className={style.layout}>
            <div className={style.group}>
                <BudleBusinessLogo/>
                <TabColumn/>
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
                        onClick={handleLogout}
                        tabId={2}
                        icon={
                            <FiLogOut
                                className={"stroke-message-wrong"}
                                size={"22px"}
                            />
                        }
                        text={"Выйти"}/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar