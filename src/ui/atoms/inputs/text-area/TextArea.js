import style from "./TextArea.module.css"
import {useState} from "react";

const TextArea = (props) => {

    const [text, setText] = useState("")

    return (
        <div className={style.wrapper}>
            <h4 className={style.hint}>{text.length} / 500</h4>
            <textarea
                className={style.textarea}
                maxLength={500}
                placeholder={props.placeholder}
                onChange={(event) => {
                    setText(event.target.value)
                }}
            />
        </div>
    )
}

export default TextArea