import style from "./PositionGroup.module.css"
import PositionSubgroup from "../../moleculas/position-subgroup/PositionSubgroup";

const PositionGroup = (props) => {
    return (
        <div className={style.card}>
            <h3 className={style.header}>{props.groupName}</h3>
            {
                props.childCategories.map(subgroup => {
                    return <PositionSubgroup
                        subgroupName={subgroup.name}
                        products={subgroup.products}
                        onEditPosition={props.onEditPosition}
                        onEditSubgroup={props.onEditSubgroup}
                        isEdit={props.isEdit}
                    />
                })
            }
        </div>
    )
}

export default PositionGroup

