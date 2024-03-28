import {cn} from "@nextui-org/react";
import {FiDelete, FiEdit, FiTrash, FiTrash2} from "react-icons/fi";

const WorkerCard = (props) => {

    const wrapperCV = [
        "hover:border-2 text-xl hover:border-main-purple transition hover:duration-200",
        "col-span-6 p-10 flex bg-white flex-row justify-between items-center",
        "border-2 border-background-blue rounded-[10px] hover:cursor-pointer hover:text-main-purple"
    ]

    return (
        <div className={cn(wrapperCV)}>
            {props.worker.firstName + " " + props.worker.middleName}
            <div className={"flex flex-row items-center gap-[20px]"}>
                <FiEdit
                    onClick={props.onEdit}
                    className={"w-[20px] cursor-pointer stroke-text-black"}
                />
                <FiTrash2
                    onClick={props.onDelete}
                    className={"w-[20px] cursor-pointer stroke-message-wrong"}
                />
            </div>
        </div>
    )

};

export default WorkerCard;
