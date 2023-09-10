import style from "./Form.module.css"

const Form = (props) => {
    return (
        <form className={style.layout}>
            {props.children}
        </form>
    )
}

export default Form