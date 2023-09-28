import style from "./SuccessPopup.module.css"
import Popup from "../../../wrappers/popup/Popup";
import Button from "../../../atoms/buttons/button/Button";

const SuccessPopup = (props) => {
    return (
        <Popup onClick={props.onClose}>
            <div className={style.row}>
                <img src={props.image} alt={"Success image"}/>
                <div className={style.rightCol}>
                    <h3 className={style.header}>{props.header}</h3>
                    <p className={style.message}>{props.message}</p>
                    <Button
                        buttonText={props.buttonText}
                        onClick={props.onClose}
                    />
                </div>
            </div>
        </Popup>
    )
}

export default SuccessPopup