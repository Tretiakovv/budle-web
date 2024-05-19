import style from "../TextInput.module.css"
import ConnectForm from "../../../wrappers/connect-form/ConnectForm";
import InputMask from "react-input-mask";

const InnerInput = ({color = 'white', ...props}) => (
    <ConnectForm>
        {(methods) => (
            props.mask ? (
                <InputMask
                    {...props}
                    {...methods?.register?.(props.name)}
                    className={style.input}
                    style={{backgroundColor: color}}
                />
            ) : (<input
                {...props}
                {...methods.register(props.name)}
                style={{backgroundColor: color}}
                className={style.input}
            />)
        )}
    </ConnectForm>
)

const ControlledTextInput = ({errorMessage, ...props}) => (
    <div className={style.layout}>
        {props.labelText}
        <div className={style.wrapper}>
            <InnerInput {...props}/>
            <div className={style.icon}>
                {props.icon}
            </div>
        </div>
        <div className={"mt-[5px] text-message-wrong font-medium"}>
            {errorMessage}
        </div>
    </div>
)

export default ControlledTextInput;