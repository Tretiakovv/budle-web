import style from "./AuthSurface.module.css"

const AuthSurface = ({tabRow, card}) => {
    return (
        <div className={style.outerLayout}>
            <div className={style.innerLayout}>
                {tabRow}
                {card}
            </div>
        </div>
    )
}

export default AuthSurface