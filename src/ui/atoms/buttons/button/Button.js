import style from "./Button.module.css"

const Button = ({buttonText, icon = ""}) => {

    if (icon === "") {
        return (
            <button className={style.button}>
                {buttonText}
            </button>
        )
    } else {
        return (
            <button className={style.button}>
                <span className={style.row}>
                    <img src={icon} alt="Button icon"/>
                    {buttonText}
                </span>
            </button>
        )
    }

}

export default Button