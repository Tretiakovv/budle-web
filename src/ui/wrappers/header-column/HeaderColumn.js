import style from "./HeaderColumn.module.css"

const HeaderColumn = ({header, ...props}) => {
    return (
        <div className={style.layout}>
            <h1>{header}</h1>
            <div className={style.row}>{props.children}</div>
        </div>
    )
}

export default HeaderColumn