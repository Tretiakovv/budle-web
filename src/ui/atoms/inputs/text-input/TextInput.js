import style from "../TextInput.module.css"

const TextInput = ({labelText = "", type = "text", placeholder, color = "white"}) => {
    return (
        <div className={style.layout}>
            <label className={"mb-[10px]"}> {labelText} </label>
            <input
                style={{backgroundColor: `${color}`}}
                type={type}
                placeholder={placeholder}
                className={style.input}
            />
        </div>
    );
}

export default TextInput;