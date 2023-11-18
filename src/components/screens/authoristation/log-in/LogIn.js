import Button from "../../../../ui/atoms/buttons/button/Button";
import Authorisation from "../../../../ui/wrappers/authorisation/Authorisation";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";
import authOptions from "../../../../data/entity/AuthData";
import {useStore} from "../../../../store/store";
import {useLogInScreen} from "./LogIn.hooks";

const LogIn = () => {

    const logInContext = useLogInScreen()

    return (
        <Authorisation
            options={authOptions}
            defaultState={authOptions[0]}
            onSubmit={logInContext.handleSubmit}
            buttonText={"Войти"}
        >
            <TextInput
                name={"login"}
                labelText={"Логин"}
                placeholder={"Введите логин"}
                type={"text"}
            />
            <TextInput
                name={"password"}
                labelText={"Пароль"}
                placeholder={"Введите пароль"}
                type={"password"}
            />
        </Authorisation>
    );
}

export default LogIn