import Card from "../../../../ui/wrappers/card/Card";
import Form from "../../../../ui/wrappers/form/Form";
import style from "../../../../ui/wrappers/authorisation/Authorisation.module.css";
import NumberInput from "../../../../ui/atoms/inputs/number-input/NumberInput";
import Button from "../../../../ui/atoms/button/Button";
import labelStyle from "./ForgotPassword.module.css"
import {useNavigate} from "react-router-dom";

const ForgotPassword = () => {

    const navigate = useNavigate()

    return (
        <div
            className={`${style.outer} ${style.inner}`}
            style={{gap: "20px", justifyContent: "center"}}
        >
            <span className={labelStyle.layout}>
                <a href={"#"} onClick={() => navigate(-1)}>
                    <img src={"arrow-left.svg"} alt={"Back icon"}/>
                </a>
                <img src={"business-budle-logo.svg"} alt={"Budle logo"}/>
            </span>

            <p style={{maxWidth: "500px"}}>
                На Вашу почту пришёл код подтверждения
                номера телефона. Введите его в поле ниже
            </p>
            <Card>
                <Form>
                    <NumberInput
                        labelText={"Код потверждения"}
                        placeholder={"Введите код подтверждения"}
                        mask={"9999"}
                    />
                    <Button buttonText={"Отправить код"}/>
                </Form>
                <a href={"#"}>Отправить повторно — 2:49 </a>
            </Card>
        </div>
    )
}

export default ForgotPassword