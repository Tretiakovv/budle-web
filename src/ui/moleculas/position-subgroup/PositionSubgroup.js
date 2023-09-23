import style from "./PositionSubgroup.module.css"
import PositionRow from "../position-row/PositionRow";
import {FiChevronDown} from "react-icons/fi";
import {useState} from "react";

const PositionSubgroup = (props) => {

    const [isOpen, changeState] = useState(true)

    return (
        <div className={style.subgroup}>

            <div className={style.headerRow}>
                <h4 className={style.header}>{props.subgroupName}</h4>
                <FiChevronDown
                    size={"18px"}
                    className={style.icon}
                    onClick={() => changeState(!isOpen)}
                />
            </div>

            {
                isOpen ? props.positions.map(position => {
                    return <PositionRow>
                        {position.name}
                        {position.category}
                        {position.price}
                        {position.gram}
                        {position.inStock}
                    </PositionRow>
                }) : null
            }

        </div>
    )
}

export default PositionSubgroup