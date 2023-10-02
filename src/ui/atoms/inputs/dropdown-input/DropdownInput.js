import style from "./DropdwonInput.module.css"
import {useLayoutEffect, useRef, useState} from "react";
import ChevronIcon from "../../icons/chevron-icon/ChevronIcon";
import DropdownOptionList from "../../../moleculas/option-list/DropdownOptionList";

const DropdownInput = ({backgroundColor = "#FFFFFF", ...props}) => {

    const divRef = useRef(null)

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => {
        setWidth(divRef.current.offsetWidth)
        setHeight(divRef.current.offsetHeight)
    })

    const [isOpen, setOpen] = useState(false)

    const color = props.selectedOption.id !== 0 ? "#181818" : "#B6C1CE"
    const message = props.selectedOption.id !== 0 ? props.selectedOption.name : props.placeholder

    const gapStyle = props.labelText == null ? 0 : 12

    return (
        <div style={{gap: gapStyle}} className={style.wrapper} ref={divRef}>
            <div className={style.labelText}>{props.labelText}</div>
            <div style={{backgroundColor: backgroundColor}} className={style.dropdown}>
                <div style={{color: color}} className={style.placeholder}>{message}</div>
                <ChevronIcon
                    iconState={isOpen}
                    setState={() => setOpen(!isOpen)}
                />
            </div>
            {
                isOpen ? <DropdownOptionList
                    options={props.options}
                    onClick={props.selectOption}
                    selectedOption={props.selectedOption}
                    width={width}
                    height={height}
                /> : null
            }
        </div>
    )

}

export default DropdownInput