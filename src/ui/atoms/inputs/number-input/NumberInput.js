import InputMask from 'react-input-mask';
import style from "../text-input/TextInput.module.css"

const NumberInput = (props) => {
    return (
        <div>
            <label>{props.labelText}</label>
            <InputMask
                mask={props.mask}
                placeholder={props.placeholder}
                className={`${style.layout}`}
            />
        </div>
    )
}

export default NumberInput