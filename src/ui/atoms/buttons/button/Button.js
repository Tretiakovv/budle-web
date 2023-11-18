import style from "./Button.module.css"

const Button = ({
                    type = "primary",
                    buttonType = "button",
                    ...props
                }) => {

    const bgColor = type === "primary" ? "#000000" : "#DDE9F0"
    const textColor = type === "primary" ? "#FFFFFF" : "#181818"

    return (
        <button
            type={buttonType}
            className={style.button}
            style={{backgroundColor: bgColor, color: textColor}}
            onClick={props.onClick}
        >
            {
                props.icon === undefined ? props.buttonText :
                    <span className={style.row}>
                        {props.icon}
                        {props.buttonText}
                    </span>
            }
        </button>
    )

}

export default Button