import TabSwitch from "../../moleculas/tab-switch/TabSwitch";
import Card from "../card/Card";
import Form from "../form/Form";
import style from "./Authorisation.module.css";
import {useNavigate} from "react-router-dom";

const Authorisation = (props) => {

    const navigate = useNavigate();

    return (
        <div className={`${style.outer} ${style.inner}`}>
            <img src={"business-budle-logo.svg"} alt={"Budle logo"}/>
            <TabSwitch
                leftMessage={"Войти"}
                leftClick={() => navigate('/log-in')}
                rightMessage={"Зарегистрироваться"}
                rightClick={() => navigate('/sign-in')}
                defaultState={props.defaultState}
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