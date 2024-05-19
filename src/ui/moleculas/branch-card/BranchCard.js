import style from "./BranchCard.module.css"
import {FiEdit, FiTrash2} from "react-icons/fi";
import {cn} from "../../../utils/cn";

const BranchCard = (props) => {

    const wrapperCV = [
        "group hover:border-2 text-xl hover:border-main-purple transition hover:duration-200",
        "hover:cursor-pointer", style.layout
    ]

    return (
        <div className={cn(wrapperCV)}>
            <div className={style.leftRow}>
                {props.establishment.name}
                <h5>{props.establishment.category}</h5>
            </div>
            <div className={'flex flex-row items-center gap-4'}>
                <FiEdit
                    onClick={() => props.onEdit(props.establishment.id)}
                    className={'hover:text-main-blue transition duration-200'}
                />
                <FiTrash2
                    onClick={() => props.onDelete(props.establishment)}
                    className={'text-red-500 hover:text-red-700 transition duration-200'}
                />
            </div>

        </div>
    )
}

export default BranchCard