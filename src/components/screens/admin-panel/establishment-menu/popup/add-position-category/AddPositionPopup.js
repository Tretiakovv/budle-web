import Popup from "../../../../../../ui/wrappers/popup/Popup";
import PopupHeader from "../../../../../../ui/atoms/rows/popup-header/PopupHeader";
import SwitchButton from "../../../../../../ui/moleculas/switch-button/SwitchButton";
import {useState} from "react";
import AddProductPopup from "./AddProductPopup";
import AddCategoryPopup from "./AddCategoryPopup";

const switchOptions = [
    {id: 0, message: "Блюдо"},
    {id: 1, message: "Категория"}
]

const AddPositionPopup = (props) => {

    const [activeOption, setActiveOption] = useState(switchOptions[0])

    return (
        <Popup
            cardWidth={980}
            cardJustify={"start"}
            onClick={props.onClose}
            fullscreen={activeOption.id === 1}
        >
            <PopupHeader
                header={"Добавить элемент"}
                onClick={props.onClose}
            />
            <SwitchButton
                options={switchOptions}
                activeOption={activeOption}
                onSelect={setActiveOption}
            />
            {
                activeOption.id === 0
                    ? (<AddProductPopup {...props}/>)
                    : (<AddCategoryPopup {...props}/>)
            }
        </Popup>
    )
}

export default AddPositionPopup