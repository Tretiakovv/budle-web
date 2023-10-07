import Popup from "../../../../../../ui/wrappers/popup/Popup";
import PopupHeader from "../../../../../../ui/atoms/rows/popup-header/PopupHeader";
import DropdownInput from "../../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import establishmentTagList from "../../../../../../data/entity/EstablishmentTagListData";
import Button from "../../../../../../ui/atoms/buttons/button/Button";
import {useState} from "react";

const PauseEstablishmentPopup = (props) => {

    const [selectedOption, selectOption] = useState({id: 0, name: ""})

    return (
        <Popup onClick={props.onClose}>

            <PopupHeader
                header={"Отмена заказа"}
                onClick={props.onClose}
            />

            <DropdownInput
                selectedOption={selectedOption}
                selectOption={(option) => selectOption(option)}
                backgroundColor={"#EEF5F9"}
                labelText={"Причина отказа"}
                placeholder={"Выберите причину отказа"}
                options={establishmentTagList}
            />

            <Button
                buttonText={"Отменить заказ"}
                onClick={props.onClose}
            />

        </Popup>
    )
}

export default PauseEstablishmentPopup