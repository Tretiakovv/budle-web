import style from "./PositionSubgroup.module.css"
import PositionRow from "../position-row/PositionRow";
import ChevronIcon from "../../atoms/icons/chevron-icon/ChevronIcon";
import {useState} from "react";

const PositionSubgroup = (props) => {

    const [iconState, setState] = useState(true)

    return (
        <div className={style.subgroup}>

            <div className={style.headerRow}>
                <h4 className={style.header}>{props.subgroupName}</h4>
                <ChevronIcon
                    iconState={iconState}
                    setState={() => setState(!iconState)}
                />
            </div>

            {
                iconState ? props.positions.map(position => {
                    return <PositionRow>
                        {position.name}
                        {position.category}
                        {position.price + " ₽"}
                        {position.gram + " гр."}
                        {position.inStock ? "Да" : "Нет"}
                    </PositionRow>
                }) : null
            }

        </div>
    )
}

export default PositionSubgroup