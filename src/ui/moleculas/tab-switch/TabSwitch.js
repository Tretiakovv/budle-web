import styles from './TabSwitch.module.css'
import Tab from "../../atoms/tab/Tab";
import {useState} from "react";

const TabSwitch = (props) => {

    const [activeTab, setActiveTab] = useState('left')

    return (
        <div className={styles.tabRow}>
            <Tab
                type={"left"}
                message={props.left}
                onClick={() => setActiveTab("left")}
                activeTab = {activeTab}
            />
            <Tab
                type={"right"}
                message={props.right}
                onClick={() => setActiveTab("right")}
                activeTab = {activeTab}
            />
        </div>
    );
}

export default TabSwitch;