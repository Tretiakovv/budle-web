import Authorisation from "../../../../ui/wrappers/authorisation/Authorisation";
import Button from "../../../../ui/atoms/buttons/button/Button";
import NumberInput from "../../../../ui/atoms/inputs/number-input/NumberInput";
import TextInput from "../../../../ui/atoms/inputs/text-input/TextInput";
import authOptions from "../../../../data/AuthData";

const SignIn = () => {
    return (
        <Authorisation
            options={authOptions}
            defaultState={authOptions[1]}
        >
            <TextInput labelText={"ФИО"} placeholder={"Иванов Иван Иванович"} type={"text"}/>
            <TextInput labelText={"Электронная почта"} placeholder={"example@gmail.com"} type={"еmail"}/>
            <NumberInput
                labelText={"Номер телефона"}
                mask={"+9 (999) 999-99-99"}
                placeholder={"+7 (000) 000-00-00"}
            />
            <Button buttonText={"Зарегистрироваться"}/>
        </Authorisation>
    )
}

export default SignIn