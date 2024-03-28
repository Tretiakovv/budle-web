import style from "./BranchCard.module.css"
import {FiEdit, FiTrash2} from "react-icons/fi";
import {cn} from "../../../utils/cn";

const BranchCard = (props) => {

    const wrapperCV = [
        "hover:border-2 text-xl hover:border-main-purple transition hover:duration-200",
        "hover:cursor-pointer hover:text-main-purple", style.layout
    ]

    return (
        <div className={cn(wrapperCV)}>
            <div className={style.leftRow}>
                {props.establishment.name}
                <h5>{props.establishment.category}</h5>
            </div>
            <FiEdit className={style.editIcon}/>
        </div>
    )
}

export default BranchCard