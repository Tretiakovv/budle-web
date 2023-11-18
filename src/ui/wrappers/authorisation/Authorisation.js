import style from "./Authorisation.module.css";

import SwitchButton from "../../moleculas/switch-button/SwitchButton";
import Card from "../card/Card";
import Form from "../form/Form";
import {useNavigate} from "react-router-dom";
import Button from "../../atoms/buttons/button/Button";

const Authorisation = (props) => {

    const navigate = useNavigate();
    const currentURL = window.location.pathname

    const handleSelect = (option) => {
        option.id === 0 ? navigate('/log-in') : navigate('/sign-in')
    }

    return (
        <div className={`${style.outer} ${style.inner}`}>
            <img src={"business-budle-logo.svg"} alt={"Budle logo"}/>
            <SwitchButton
                options={props.options}
                activeOption={props.defaultState}
                onSelect={handleSelect}
            />
            <Card>
                <Form onSubmit={props.onSubmit}>
                    {props.children}
                    <Button
                        buttonType={"submit"}
                        buttonText={props.buttonText}
                    />
                    {
                        currentURL === "/log-in" &&
                        <a href={'/forgot-password'}>
                            Забыли пароль?
                        </a>
                    }
                </Form>
            </Card>
        </div>
    )
}

export default Authorisation