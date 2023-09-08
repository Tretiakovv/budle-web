import TabSwitch from "../../../ui/moleculas/tab-switch/TabSwitch";
import TextInput from "../../../ui/atoms/text-input/TextInput";
import Button from "../../../ui/atoms/button/Button";
import Card from "../../../ui/wrappers/card/Card";
import Form from "../../../ui/wrappers/form/Form"
import style from "./SignIn.module.css"

const SignIn = () => {
    return (
        <div className={style.outer}>
            <div className={style.inner}>
                <img src={"business-budle-logo.svg"} alt={"Budle logo"}/>
                <TabSwitch left={"Войти"} right={"Зарегистрироваться"}/>
                <Card>
                    <Form>
                        <TextInput labelText={"Логин"} placeholder={"Введите логин"} type={"text"}/>
                        <TextInput labelText={"Пароль"} placeholder={"Введите пароль"} type={"password"}/>
                        <Button buttonText={"Войти"}/>
                    </Form>
                </Card>
            </div>
        </div>
    );
}

export default SignIn