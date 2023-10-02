import style from "./FileInput.module.css"

const FileInput = ({labelText = "Фотография"}) => {
    return (
        <div className={style.wrapper}>
            <h4 className={style.labelText}>{labelText}</h4>
            <div className={style.fileInput}>
                <p className={style.paragraph}>
                    <span className={style.highlight}>Выберите фотографию с диска </span>
                    или перетащите ее в данное поле
                </p>
            </div>
        </div>
    )
}

export default FileInput