import {FiX} from "react-icons/fi";
import FormRow from "./FormRow";

const PopupHeaderRow = (props) => {
    return (
        <FormRow className={'items-center'}>
            <h2 className={"font-semibold text-2xl text-text-black"}>{props?.name ?? "Добавить заведение"}</h2>
            <FiX
                size={"20px"}
                className={'stroke-text-black cursor-pointer'}
                onClick={props.onClick}
            />
        </FormRow>
    )
}

export default PopupHeaderRow