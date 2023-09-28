import style from "./MenuList.module.css"

import PositionGroup from "../posititon-group/PositionGroup";
const MenuList = (props) => {
    return (
        <div className={style.list}>
            {
                props.data.map(group => {
                    return <PositionGroup
                        groupName={group.groupName}
                        subgroups={group.subgroups}
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