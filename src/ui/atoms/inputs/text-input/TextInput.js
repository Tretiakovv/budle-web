import style from "../TextInput.module.css"
const TextInput = ({
                       labelText = "",
                       type = "text",
                       placeholder = "",
                       color = "white",
                       icon = null,
                       ...props
                   }) => {

    const labelStyle = labelText === "" ? "" : "mb-[10px]"

    return (
        <div className={style.layout}>
            <label className={labelStyle}> {labelText} </label>
            <div className={style.wrapper}>
                <input
                    style={{backgroundColor: `${color}`}}
                    type={type}
                    placeholder={placeholder}
                    className={style.input}
                    onChange={(event) => {
                        props.onChange(event.target.value)
                    }}
                />
                <div className={style.icon}>
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default TextInput;