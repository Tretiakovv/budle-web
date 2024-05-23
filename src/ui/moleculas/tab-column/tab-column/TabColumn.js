import style from "./TabColumn.module.css";
import Tab from "../../../atoms/tab/Tab";
import {useLocation, useNavigate} from "react-router-dom";

import {sidebarTagListData} from "../../../../data/entity/SidebarTagListData";
import {useEffect, useState} from "react";

const TabColumn = ({activeTab}) => {

    const paths = [
        {path : "/establishment-list", id : 1},
        {path : "/settings", id : 2},
        {path : "/manager-list", id : 3},
        {path : "/establishment-menu", id : 4},
        {path : "/order-list", id : 5},
        {path : "/support", id : 6},
        {path : "/reviews", id : 7},
    ]

    const location = useLocation()
    const [selectedTab, setSelectedTab] = useState(1)

    const navigate = useNavigate()

    useEffect(() => {
        paths.forEach(item => {
            if (location.pathname.includes(item.path)) {
                setSelectedTab(item.id)
            }
        })
    }, [location.pathname]);

    return (
        <div className={style.layout}>
            {sidebarTagListData.map(tab => {
                return <Tab
                    activeTab={selectedTab}
                    tabId={tab.id}
                    text={tab.name}
                    icon={tab.icon}
                    onClick={
                        () => navigate(tab.route)
                    }
                />
            })}
        </div>
    )
}

export default TabColumn