import style from "./EstablishmentGroup.module.css"

const EstablishmentGroup = ({establishmentName, ...props}) => {
    return (
        <div className={style.layout}>
            <h2>{props.header}</h2>
            <div className={style.content}>{props.children}</div>
        </div>
    )
}

export default EstablishmentGroup