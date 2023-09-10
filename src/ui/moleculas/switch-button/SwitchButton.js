import SwitchOption from "../../atoms/buttons/switch-option/SwitchOption";
import {useState} from "react";

const SwitchButton = (props) => {

    const [activeTab, setActiveTab] = useState(props.defaultState)

    return (
        <div className={"flex"}>
            <SwitchOption
                type={"left"}
                message={props.leftMessage}
                onClick={props.leftClick}
                activeTab = {activeTab}
            />
            <SwitchOption
                type={"right"}
                message={props.rightMessage}
                onClick={props.rightClick}
                activeTab = {activeTab}
            />
        </div>
    );
}

export default SwitchButton;