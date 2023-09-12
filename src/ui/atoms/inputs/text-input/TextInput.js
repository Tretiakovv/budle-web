import style from "../TextInput.module.css"

const TextInput = ({labelText = "", type = "text", placeholder, className = ""}) => {

    const divStyle = `${style.layout} ${className}`

    return (
        <div className={divStyle}>
            <label> {labelText} </label>
            <input
                type={type}
                placeholder={placeholder}
                className={style.input}
            />
        </div>
    );
}

export default TextInput;