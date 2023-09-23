import style from "./FilterRow.module.css"
import TextFilter from "../text-filter/TextFilter";
import filterData from "../../../../data/FilterData";

const FilterRow = () => {
    return (
        <div className={style.filterRow}>
            {
                filterData.map(child => {
                    return <div className={style.child}>
                        <TextFilter name={child.name} hasIcon={child.hasIcon}/>
                    </div>
                })
            }
        </div>
    )

}

export default FilterRow