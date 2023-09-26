import style from "./Popup.module.css"

const Popup = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.card}>{props.children}</div>
            <div className={style.background}/>
        </div>
    )
}

export default Popup