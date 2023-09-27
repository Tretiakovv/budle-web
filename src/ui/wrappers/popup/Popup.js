import style from "./Popup.module.css"

const Popup = ({width = 735, ...props}) => {
    return (
        <div className={style.wrapper}>
            <div style={{width: width}} className={style.card}>{props.children}</div>
            <div className={style.background}/>
        </div>
    )
}

export default Popup