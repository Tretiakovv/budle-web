import style from "./Authorisation.module.css";

import SwitchButton from "../../moleculas/switch-button/SwitchButton";
import Card from "../card/Card";
import Form from "../form/Form";
import {useNavigate} from "react-router-dom";

const Authorisation = (props) => {

    const navigate = useNavigate();

    return (
        <div className={`${style.outer} ${style.inner}`}>
            <img src={"business-budle-logo.svg"} alt={"Budle logo"}/>
            <SwitchButton
                options={props.options}
                activeOption={props.defaultState}
                onSelect={(option) => {
                    option.id === 0 ? navigate('/log-in') : navigate('/sign-in')
                }}
            />
            <Card>
                <Form>
                    {props.children}
                </Form>
            </Card>
        </div>
    )
}

export default Authorisation