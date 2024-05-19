import React from 'react';
import {cn} from "../../../../../utils/cn";

const FormRow = (props) => {
    return (
        <div
            className={cn("w-full p-7 rounded-xl flex flex-row justify-between gap-5 items-start bg-white", props.className)}>
            {props.children}
        </div>
    )
}

export default FormRow;