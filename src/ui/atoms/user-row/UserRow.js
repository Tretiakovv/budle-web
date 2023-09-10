import style from "./UserRow.module.css"

const UserRow = (props) => {
    return (
        <div className={style.layout}>
            <div className={style.box}>
                <img className={style.icon} src={"user.svg"} alt={"User icon"} />
                <div className={style.circle}></div>
            </div>
            <div className={style.userRow}>
                <h4 className={style.firstText}>{props.username}</h4>
                <h4 className={style.secondText}>{props.userGrade}</h4>
            </div>
        </div>
    )
}

export default UserRow