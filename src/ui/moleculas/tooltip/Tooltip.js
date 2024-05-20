import React from 'react';
import {Tooltip as JoyTooltip} from '@mui/joy'
import {FiEdit, FiTrash2} from "react-icons/fi";
import {cn} from "../../../utils/cn";

const Tooltip = (props) => {

    const rowCV = [
        "w-full flex flex-row items-center gap-3 text-gray-400",
        "transition duration-200 hover:text-black pointer cursor-pointer"
    ];

    return (
        <React.Fragment>
            <JoyTooltip
                size={"lg"}
                variant={"outlined"}
                sx={{
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: "#FFFFFF",
                }}
                title={
                    <div className={"flex flex-col gap-5 p-3"}>
                        <div
                            className={cn(rowCV)}
                            onClick={(e) => {
                                e.stopPropagation();
                                props.onEdit();
                            }}
                        >
                            <FiEdit size={"18px"}/>
                            <h4 className={'text-gray-400 text-base'}>Редактировать</h4>
                        </div>
                        <div
                            className={cn(rowCV, "hover:text-red-700 text-red-500")}
                            onClick={(e) => {
                                e.stopPropagation();
                                props.onDelete();
                            }}
                        >
                            <FiTrash2 size={"18px"}/>
                            <h4 className={'text-red-500 text-base'}>Удалить</h4>
                        </div>
                    </div>
                }
                placement={"bottom-end"}
            >
                {props.children}
            </JoyTooltip>
        </React.Fragment>
    )
};

export default Tooltip;