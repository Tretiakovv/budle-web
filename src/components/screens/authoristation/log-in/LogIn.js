import Authorisation from "../../../../ui/wrappers/authorisation/Authorisation";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";
import authOptions from "../../../../data/entity/AuthData";
import {useLogInScreen} from "./LogIn.hooks";

const LogIn = () => {

    const {register, ...logInContext} = useLogInScreen()

    return (
        <Authorisation
            options={authOptions}
            defaultState={authOptions[0]}
            onSubmit={logInContext.handleSubmit}
            buttonText={"Войти"}
        >
            <TextInput
                errorMessage={logInContext.errors.login?.message}
                register={register("login")}
                labelText={"Логин"}
                placeholder={"Введите логин"}
                type={"text"}
            />
            <TextInput
                errorMessage={logInContext.errors.password?.message}
                register={register("password")}
                labelText={"Пароль"}
                placeholder={"Введите пароль"}
                type={"password"}
            />
            {
                logInContext.isLoginError &&
                <div className={"font-medium"}>
                    {logInContext.isLoginError}
                </div>
            }
        </Authorisation>
    );
}

export default LogIn