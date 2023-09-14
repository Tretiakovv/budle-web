import style from "./Sidebar.module.css"
import Tab from "../../atoms/tab/Tab";
import TabColumn from "../../moleculas/tab-column/tab-column/TabColumn";
import UserRow from "../../atoms/user-row/UserRow";

const Sidebar = ({activeTab}) => {
    return (
        <div className={style.layout}>
            <div className={style.group}>
                <img className={style.logo} src={"business-budle-logo.svg"} alt={"Budle logo"}/>
                <TabColumn activeTab={activeTab}/>
            </div>
            <div className={`${style.group} ${style.bottomGroup}`}>
                <UserRow username={"Артём"} userGrade={"Создатель"}/>
                <div className={style.divider}></div>
                <div className={style.bottomTabCol}>
                    <Tab tabId={1} icon={"columns.svg"} text={"Свернуть меню"}/>
                    <Tab tabId={2} icon={"log-out.svg"} text={"Выйти"} textColor={"message-wrong"}/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar