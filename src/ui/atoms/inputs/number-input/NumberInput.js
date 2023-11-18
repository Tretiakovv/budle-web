import InputMask from 'react-input-mask';
import style from "../TextInput.module.css"

const NumberInput = (props) => {
    return (
        <div className={"w-full"}>
            <label>{props.labelText}</label>
            <InputMask
                name={props.name}
                mask={props.mask}
                placeholder={props.placeholder}
                className={style.input}
            />
        </div>
    )
}

export default NumberInput