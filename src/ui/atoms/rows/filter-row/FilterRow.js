import style from "./FilterRow.module.css"
import TextFilter from "../text-filter/TextFilter";

const FilterRow = () => {

    const data = [
        {name: "Название", hasIcon: true},
        {name: "Категория", hasIcon: false},
        {name: "Цена", hasIcon: true},
        {name: "Граммовка", hasIcon: true},
        {name: "Продаётся", hasIcon: false},
    ]

    return (
        <div className={style.filterRow}>
            {
                data.map(child => {
                    return <TextFilter name={child.name} hasIcon={child.hasIcon} />
                })
            }
        </div>
    )
}

export default FilterRow