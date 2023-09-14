import style from "./Tab.module.css"
import {Component} from "react";

const Tab = ({activeTab = -1, icon, ...props}) => {

    const color = activeTab === props.tabId ? "#181818" : "#B6C1CE"
    const tabStyle = activeTab === props.tabId ? `${style.layout} ${style.selected}` : `${style.layout}`

    return (
        <div onClick={props.onClick} className={tabStyle}>
            {icon}
            <h4 style={{color: `${color}`}}>{props.text}</h4>
        </div>
    )
}

export default Tab