import style from "./MenuList.module.css"

import PositionGroup from "../../wrappers/posititon-group/PositionGroup";
const MenuList = (props) => {
    return (
        <div className={style.list}>
            {
                props.data.map(group => {
                    return <PositionGroup
                        groupName={group.groupName}
                        subgroups={group.subgroups}
                    />
                })
            }
        </div>
    )
}

export default MenuList