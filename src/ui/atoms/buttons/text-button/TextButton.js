import React from 'react';
import {FiPlus} from "react-icons/fi";
import {cn} from "../../../../utils/cn";

const wrapperCV = [
    "text-main-blue hover:text-blue-800 flex flex-row",
    "items-center gap-2 transition duration-150"
]

const TextButton = (props) => {
    return (
        <div
            onClick={props.onClick}
            className={cn(wrapperCV)}
        >
            <FiPlus size={'18px'}/>
            {props.children}
        </div>
    );
};

export default TextButton;