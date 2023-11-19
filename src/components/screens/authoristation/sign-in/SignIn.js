import Authorisation from "../../../../ui/wrappers/authorisation/Authorisation";
import NumberInput from "../../../../ui/atoms/inputs/number-input/NumberInput";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";
import authOptions from "../../../../data/entity/AuthData";
import {useSignInScreen} from "./SignIn.hooks";

const SignIn = () => {

    const {register, ...signInContext} = useSignInScreen()

    return (
        <Authorisation
            options={authOptions}
            defaultState={authOptions[1]}
            onSubmit={signInContext.handleSubmit}
            buttonText={"Зарегистрироваться"}
        >
            <TextInput
                errorMessage={signInContext.errors.username?.message}
                register={register("username")}
                labelText={"ФИО"}
                placeholder={"Иванов Иван Иванович"}
                type={"text"}
            />
            <TextInput
                errorMessage={signInContext.errors.email?.message}
                register={register("email")}
                labelText={"Электронная почта"}
                placeholder={"example@gmail.com"}
                type={"еmail"}
            />
            <NumberInput
                errorMessage={signInContext.errors.phoneNumber?.message}
                register={register("phoneNumber")}
                labelText={"Номер телефона"}
                mask={"+9 (999) 999-99-99"}
                placeholder={"+7 (000) 000-00-00"}
            />
            {
                signInContext.isRegisterError &&
                <div className={"font-medium"}>
                    {signInContext.isRegisterError}
                </div>
            }
        </Authorisation>
    )
}

export default SignIn