import React from 'react';
import {cn} from "../../../utils/cn";
import {FiCheck} from "react-icons/fi";

const Checkbox = (props) => {

    const checkboxCV = [
        "w-5 h-5 flex items-center justify-center rounded-[5px]",
        "transition duration-200 cursor-pointer select-none",
        {"border-2 border-gray-100": !props.isSelected},
        {"bg-blue-600": props.isSelected}
    ]

    return (
        <div className={'flex flex-row items-center gap-3'}>
            <div className={cn(checkboxCV)} onClick={props.onSelect}>
                {props.isSelected && <FiCheck
                    className={"stroke-white stroke-[3px] top-[2px]"}
                    size={"14px"}
                />}
            </div>
            <h4 className={cn('text-base', props.isSelected && 'font-semibold')}>{props.label}</h4>
        </div>

    );

};

export default Checkbox;