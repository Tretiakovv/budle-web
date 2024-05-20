import style from "./MenuList.module.css"
import PositionGroup from "../posititon-group/PositionGroup";

const MenuList = (props) => {
    return (
        <div className={style.list}>
            {props.menu.map((group, key) => (
                <PositionGroup
                    groupName={group.name} categoryId={group.id}
                    childCategories={group.childCategories}
                    isEdit={props.isEdit} key={key}
                />
            ))}
        </div>
    )
}

export default MenuList