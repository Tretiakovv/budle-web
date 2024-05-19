import style from "../TextInput.module.css"

const TextInput = ({
                       labelText = "", type = "text",
                       placeholder = "", color = "white",
                       onChange = () => {
                       },
                       register, errorMessage,
                       ...props
                   }) => {

    const labelStyle = labelText === "" ? "" : "mb-[10px]"

    return (
        <div className={style.layout}>
            <label className={labelStyle}> {labelText} </label>
            <div className={style.wrapper}>
                <input
                    {...register}
                    style={{backgroundColor: color}}
                    type={type}
                    placeholder={placeholder}
                    className={style.input}
                    value={props.value}
                    onChange={(event) => onChange(event.target.value)}
                />
                <div className={style.icon}>
                    {props.icon}
                </div>
            </div>
            <div className={"mt-[5px] text-message-wrong font-medium"}>
                {errorMessage}
            </div>
        </div>
    )
}

export default TextInput;