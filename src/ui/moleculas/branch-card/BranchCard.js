import IconButton from "../../atoms/buttons/icon-button/IconButton";
import style from "./BranchCard.module.css"

const BranchCard = (props) => {
    return (
        <div className = {style.layout}>
            <div className = {style.leftRow}>
                <h4>{props.address}</h4>
                <h5>{props.additional}</h5>
            </div>
            <div className={style.rightRow}>
                <IconButton image={"edit.svg"} />
                <IconButton image={"trash-2.svg"} />
            </div>
        </div>
    )
}

export default BranchCard