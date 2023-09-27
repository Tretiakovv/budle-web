import style from "./Popup.module.css"

const Popup = ({cardWidth = 735, ...props}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div
                    style={{width: cardWidth}}
                    className={style.card}
                >
                    {props.children}
                </div>
                <div className={style.background} onClick={props.onClick}></div>
            </div>
        </div>
    )
}

export default Popup