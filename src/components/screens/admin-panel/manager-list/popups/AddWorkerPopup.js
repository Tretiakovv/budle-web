import Popup from "../../../../../ui/wrappers/popup/Popup";
import PopupHeader from "../../../../../ui/atoms/rows/popup-header/PopupHeader";
import SwitchButton from "../../../../../ui/moleculas/switch-button/SwitchButton";
import {useState} from "react";
import InviteWorkerPopup from "./ui/InviteWorkerPopup";
import AddRealWorkerPopup from "./ui/AddRealWorkerPopup";

const switchOptions = [
    {id: 0, message: "Нового"},
    {id: 1, message: "Уже существующего"}
]

const AddWorkerPopup = (props) => {

    const [activeOption, setActiveOption] = useState(switchOptions[0])

    return (
        <Popup
            cardWidth={980}
            cardJustify={"start"}
            onClick={props.onClose}
            fullscreen
        >
            <PopupHeader
                header={"Добавить сотрудника"}
                onClick={props.onClose}
            />
            <SwitchButton
                options={switchOptions}
                activeOption={activeOption}
                onSelect={setActiveOption}
            />
            {
                activeOption.id === 0
                    ? (<InviteWorkerPopup {...props}/>)
                    : (<AddRealWorkerPopup {...props}/>)
            }
        </Popup>
    )
}

export default AddWorkerPopup