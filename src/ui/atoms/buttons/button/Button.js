import style from "./Button.module.css"

const Button = ({
                    buttonText,
                    type = "primary",
                    icon = "",
                }) => {

    const bgColor = type === "primary" ? "#000000" : "#EEF5F9"
    const textColor = type === "primary" ? "#FFFFFF" : "#181818"

    if (icon === "") {
        return (
            <button className={style.button} style={{backgroundColor: bgColor, color: textColor}}>
                {buttonText}
            </button>
        )
    } else {
        return (
            <button className={style.button} style={{backgroundColor: bgColor, color: textColor}}>
                <span className={style.row}>
                    <img src={icon} alt="Button icon"/>
                    {buttonText}
                </span>
            </button>
        )
    }

}

export default Button