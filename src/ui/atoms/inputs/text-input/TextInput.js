import style from "../TextInput.module.css"

const TextInput = ({
                       labelText = "",
                       type = "text",
                       placeholder = "",
                       color = "white",
                       icon = ""}) => {
    return (
        <div className={style.layout}>
            <label className={"mb-[10px]"}> {labelText} </label>
            <input
                style={{backgroundColor: `${color}`}}
                type={type}
                placeholder={placeholder}
                className={style.input}
            />
            <img src={icon} alt={"Input Icon"}/>
        </div>
    );
}

export default TextInput;