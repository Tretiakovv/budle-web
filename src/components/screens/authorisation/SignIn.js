import TabRow from "../../../ui/moleculas/tab-row/TabRow";
import TextInput from "../../../ui/atoms/text-input/TextInput";
import Button from "../../../ui/atoms/button/Button";
import Card from "../../../ui/templates/card/Card";
import AuthSurface from "../../../ui/templates/auth-surface/AuthSurface";

const innerComponents = [
    () => <TextInput labelText={"Логин"} placeholder={"Введите логин"}/>,
    () => <TextInput labelText={"Пароль"} placeholder={"Введите пароль"}/>,
    () => <Button buttonText={"Войти"}/>,
];

const SignIn = () => {
    return (
        <AuthSurface
            card={<Card components={innerComponents}/>}
            tabRow={<TabRow left={"Войти"} right={"Зарегистрироваться"}/>}
        />
    );
}

export default SignIn