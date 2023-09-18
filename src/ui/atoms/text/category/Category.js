import style from "./Category.module.css"

const Category = ({category}) => {
    return (
        <div className={style.layout}>
            {category}
        </div>
    )
}

export default Category