import style from "./EmptyScreen.module.css"

const EmptyScreen = (props) => {
    return (
        <div className={style.wrapper}>
            <img src={"ghost.png"} alt={"Ghost face"} />
            <div className={style.textCol}>
                <h3 className={style.header}>{props.header}</h3>
                <p className={style.message}>{props.message}</p>
            </div>
        </div>
    )
}

export default EmptyScreen