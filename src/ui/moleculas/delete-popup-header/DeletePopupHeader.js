import style from "./DeletePopupHeader.module.css"
import {FiX} from "react-icons/fi";

const DeletePopupHeader = (props) => {
    return (
        <div className={style.headerRow}>
            <div className={style.headerData}>
                <div className={style.header}>{props.establishmentName}</div>
                <div className={style.additional}>
                    <div>{props.address}</div>
                    {
                        props.additional === null ? null :
                            <div className={style.circleRow}>
                                <div className={style.circle}/>
                                <div>{props.additional}</div>
                            </div>
                    }
                </div>
            </div>
            <FiX
                size={"20px"}
                className={style.icon}
                onClick={props.onClick}
            />
        </div>
    )
}

export default DeletePopupHeader