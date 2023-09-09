import style from "./TextInput.module.css"

const TextInput = ({labelText, type, placeholder}) => {
    return (
        <div>
            <label> {labelText} </label>
            <input
                type={type}
                placeholder={placeholder}
                className={`${style.style} ${style.layout}`}
            />
        </div>
    );
}

export default TextInput;