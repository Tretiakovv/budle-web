import style from "./TextArea.module.css"
import {useState} from "react";

const TextArea = (props) => {

    const [length, setLength] = useState(0)

    return (
        <div className={"w-full flex flex-col gap-[10px]"}>

            <div className={style.wrapper}>
                <h4 className={style.hint}>{length} / 500</h4>
                <textarea
                    {...props.register}
                    className={style.textarea}
                    maxLength={500}
                    placeholder={props.placeholder}
                    onChange={(event) => setLength(event.target.value.length)}
                />
            </div>

            <div className={"text-message-wrong font-medium"}>
                {props.errorMessage}
            </div>

        </div>
    )
}

export default TextArea