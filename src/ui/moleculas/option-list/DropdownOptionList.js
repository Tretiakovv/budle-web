import style from "./DropdownOptionList.module.css"
import DropdownOption from "../../atoms/buttons/dropdown-option/DropdownOption";

const OptionList = (props) => {
    return (
        <div
            style={{
                    width: `${props.width}px`,
                    marginTop: `${props.height + 20}px`
                }}
            className={style.wrapper}
        >
            {
                props.options.map(option => {
                    return <DropdownOption
                        option={option}
                        onClick={props.onClick}
                        selectedOption={props.selectedOption}
                    />
                })
            }
        </div>
    )
}

export default OptionList