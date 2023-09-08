import style from "./Button.module.css"

const Button = ({buttonText}) => {
    return (
        <button className={style.button}>
            {buttonText}
        </button>
    )
}

export default Button