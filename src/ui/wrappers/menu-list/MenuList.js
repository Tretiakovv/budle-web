import style from "./MenuList.module.css"
import PositionGroup from "../posititon-group/PositionGroup";

const MenuList = (props) => {
    return (
        <div className={style.list}>
            {
                props.data === null ? null :
                    props.data.result === null ? null :
                props.data.result.map(group => {
                    return <PositionGroup
                        groupName={group.name}
                        childCategories={group.childCategories}
                        onEditPosition={props.onEditPosition}
                        onEditSubgroup={props.onEditSubgroup}
                        isEdit={props.isEdit}
                    />
                })
            }
        </div>
    )
}

export default MenuList