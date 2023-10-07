import style from "./Tab.module.css"

const Tab = ({activeTab = -1, icon, ...props}) => {

    const color = activeTab === props.tabId ? "#181818" : "#B6C1CE"
    const tabStyle = activeTab === props.tabId ? `${style.layout} ${style.selected}` : `${style.layout}`
    const padding = activeTab === props.tabId ? 10 : 20

    return (
        <div
            style={{paddingLeft: padding}}
            className={tabStyle}
            onClick={props.onClick}
        >
            <div style={{color: color}}>
                {icon}
            </div>
            <h4 style={{color: `${color}`}}>{props.text}</h4>
        </div>
    )
}

export default Tab