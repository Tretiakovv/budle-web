import style from "./TextInput.module.css"

const TextInput = ({labelText, placeholder}) => {
    return (
        <div>
            <label>
                {labelText}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className={style.textInput}
            />
        </div>
    );
}

export default TextInput;