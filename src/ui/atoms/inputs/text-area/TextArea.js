import style from "./TextArea.module.css"

const TextArea = (props) => {
    return (
        <div className={style.wrapper}>
            <h4 className={style.hint}>{props.text.length} / 500</h4>
            <textarea
                className={style.textarea}
                maxLength={500}
                placeholder={props.placeholder}
                onChange={(event) => {
                    props.setText(event.target.value)
                }}
            />
        </div>
    )
}

export default TextArea