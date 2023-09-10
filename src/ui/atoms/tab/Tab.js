import style from "./Tab.module.css"

const Tab = ({activeTab = -1, textColor = "#B6C1CE", ...props}) => {

    const color = textColor
    const tabStyle = activeTab === props.tabId ? `${style.layout} ${style.selected}` : `${style.layout}`

    return (
        <div className={tabStyle}>
            <img src={props.icon} alt={"Tab icon"}/>
            <h4 style={{color: `${color}`}}>{props.text}</h4>
        </div>
    )
}

export default Tab