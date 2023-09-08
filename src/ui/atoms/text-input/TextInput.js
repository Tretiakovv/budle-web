import style from "./TextInput.module.css"

const classNames = `${style.style} ${style.layout}`;

const TextInput = ({labelText, type, placeholder}) => {
    return (
        <div>
            <label> {labelText} </label>
            <input
                type={type}
                placeholder={placeholder}
                className={classNames}
            />
        </div>
    );
}

export default TextInput;