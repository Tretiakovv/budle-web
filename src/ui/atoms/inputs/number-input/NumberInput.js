import InputMask from 'react-input-mask';
import style from "../TextInput.module.css"

const NumberInput = ({register, ...props}) => {
    return (
        <div className={"w-full"}>
            <label>{props.labelText}</label>
            <InputMask
                {...register}
                mask={props.mask}
                placeholder={props.placeholder}
                className={style.input}
            />
            <div className={"mt-[5px] text-message-wrong font-medium"}>
                {props.errorMessage}
            </div>
        </div>
    )
}

export default NumberInput