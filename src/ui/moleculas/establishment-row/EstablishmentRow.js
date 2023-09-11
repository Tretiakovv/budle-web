import IconButton from "../../atoms/buttons/icon-button/IconButton";
import style from "./EstablishmentRow.module.css"

const EstablishmentRow = ({filial, address = ""}) => {
    return (
        <div className = {style.layout}>
            <div className = {style.leftRow}>
                <h4>{filial}</h4>
                <h5>{address}</h5>
            </div>
            <div className={style.rightRow}>
                <IconButton image={"edit.svg"} />
                <IconButton image={"trash-2.svg"} />
            </div>
        </div>
    )
}

export default EstablishmentRow