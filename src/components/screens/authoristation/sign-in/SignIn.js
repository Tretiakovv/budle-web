import Authorisation from "../../../../ui/wrappers/authorisation/Authorisation";
import NumberInput from "../../../../ui/atoms/inputs/number-input/NumberInput";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";
import authOptions from "../../../../data/entity/AuthData";
import {useSignInScreen} from "./SignIn.hooks";

const SignIn = () => {

    const signInContext = useSignInScreen()

    return (
        <Authorisation
            options={authOptions}
            defaultState={authOptions[1]}
            onSubmit={signInContext.handleSubmit}
            buttonText={"Зарегистрироваться"}
        >
            <TextInput
                name={"name"}
                labelText={"ФИО"}
                placeholder={"Иванов Иван Иванович"}
                type={"text"}
            />
            <TextInput
                name={"email"}
                labelText={"Электронная почта"}
                placeholder={"example@gmail.com"}
                type={"еmail"}
            />
            <NumberInput
                name={"phoneNumber"}
                labelText={"Номер телефона"}
                mask={"+9 (999) 999-99-99"}
                placeholder={"+7 (000) 000-00-00"}
            />

        </Authorisation>
    )
}

export default SignIn