import style from "./TabColumn.module.css";
import Tab from "../../../atoms/tab/Tab";
import {useNavigate} from "react-router-dom";

import {sidebarTagListData} from "../../../../data/entity/SidebarTagListData";

const TabColumn = ({activeTab}) => {

    const navigate = useNavigate()

    return (
        <div className={style.layout}>
            {
                sidebarTagListData.map(tab => {
                    return <Tab
                        activeTab={activeTab}
                        tabId={tab.id}
                        text={tab.name}
                        icon={tab.icon}
                        onClick={
                            () => navigate(tab.route)
                        }
                    />
                })
            }
        </div>
    )
}

export default TabColumn