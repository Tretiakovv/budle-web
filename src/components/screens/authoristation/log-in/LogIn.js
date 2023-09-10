import Button from "../../../../ui/atoms/buttons/button/Button";
import Authorisation from "../../../../ui/wrappers/authorisation/Authorisation";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";

const LogIn = () => {
    return (
        <Authorisation defaultState = {"left"}>
            <TextInput labelText={"Логин"} placeholder={"Введите логин"} type={"text"}/>
            <TextInput labelText={"Пароль"} placeholder={"Введите пароль"} type={"password"}/>
            <Button buttonText={"Войти"}/>
            <a href={'/forgot-password'}>Забыли пароль?</a>
        </Authorisation>
    );
}

export default LogIn