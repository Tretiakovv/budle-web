import style from "./BranchCard.module.css"
import {FiEdit, FiTrash2} from "react-icons/fi";

const BranchCard = (props) => {

    const branch = props.branch
    const managerAdditional = props.isManager ? branch.address : branch.additional
    const managerName = props.isManager ? branch.manager : null

    return (
        <div className = {style.layout}>
            <div className = {style.leftRow}>

                {
                    managerName === null ?
                        <h4>{branch.address}</h4>
                        : <h4>{managerName}</h4>
                }

                <h5>{managerAdditional}</h5>

            </div>
            <div className={style.rightRow}>
                <FiEdit className={style.editIcon} />
                <FiTrash2
                    className={style.deleteIcon}
                    onClick={() => props.onClick({
                        establishmentName: props.establishmentName,
                        branch : props.branch
                    })}
                />
            </div>
        </div>
    )
}

export default BranchCard