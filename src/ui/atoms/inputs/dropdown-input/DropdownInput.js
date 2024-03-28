import style from "./DropdwonInput.module.css"
import {useLayoutEffect, useRef, useState} from "react";
import ChevronIcon from "../../icons/chevron-icon/ChevronIcon";
import DropdownOptionList from "../../../moleculas/option-list/DropdownOptionList";
import {Colors} from "../../../../theme/Colors";
import {useSizeRef} from "../../../../hooks/UseSizeRef";
import {cn} from "@nextui-org/react";

const DropdownInput = ({backgroundColor = "#FFFFFF", ...props}) => {

    const sizeRef = useSizeRef()
    const [isOpen, setOpen] = useState(false)

    const color = props.selectedOption.id > 0 ? Colors["text-black"] : Colors["text-gray"]
    const message = props.selectedOption.id > 0  ? props.selectedOption.name : props.placeholder

    const gapStyle = props.labelText == null ? 0 : 12

    return (
        <div
            {...props.register}
            style={{gap: gapStyle}} className={cn(props.className,style.wrapper)}
            ref={sizeRef.ref}
        >
            <div className={style.labelText}>{props.labelText}</div>
            <div style={{backgroundColor: backgroundColor}} className={style.dropdown}>
                <div style={{color: color}} className={style.placeholder}>{message}</div>
                <ChevronIcon
                    iconState={isOpen}
                    setState={() => setOpen(!isOpen)}
                />
            </div>
            <div className={"mt-[5px] text-message-wrong font-medium"}>
                {props.errorMessage}
            </div>
            {
                isOpen ? <DropdownOptionList
                    options={props.options}
                    onClick={props.selectOption}
                    selectedOption={props.selectedOption}
                    width={sizeRef.width}
                    height={sizeRef.height}
                /> : null
            }
        </div>
    )

}

export default DropdownInput