import styles from './TabSwitch.module.css'
import Tab from "../../atoms/tab/Tab";
import {useState} from "react";

const TabSwitch = (props) => {

    const [activeTab, setActiveTab] = useState(props.defaultState)

    return (
        <div className={styles.tabRow}>
            <Tab
                type={"left"}
                message={props.leftMessage}
                onClick={props.leftClick}
                activeTab = {activeTab}
            />
            <Tab
                type={"right"}
                message={props.rightMessage}
                onClick={props.rightClick}
                activeTab = {activeTab}
            />
        </div>
    );
}

export default TabSwitch;