import Authorisation from "../../../../ui/wrappers/authorisation/Authorisation";
import authOptions from "../../../../data/entity/AuthData";
import {useUnit} from "effector-react";
import {registerUserFx} from "../../../../models/auth/auth";
import {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterSchema} from "../../../../schemas";
import ControlledTextInput from "../../../../ui/atoms/inputs/text-input/ControlledTextInput";
import {useNavigate} from "react-router-dom";

const SignIn = () => {

    const navigate = useNavigate()

    const register = useUnit(registerUserFx)
    const [error, setError] = useState('')

    const methods = useForm({
        resolver: zodResolver(RegisterSchema),
        mode: 'onSubmit'
    })

    const {formState : {errors}} = methods

    const onSubmit = (fieldValues) => {
        register(fieldValues)
            .then(_ => navigate('/log-in'))
            .catch(setError)
    }

    return (
        <Authorisation
            options={authOptions}
            defaultState={authOptions[1]}
            onSubmit={methods.handleSubmit(onSubmit)}
            buttonText={"Зарегистрироваться"}
        >
            <FormProvider {...methods}>
                <ControlledTextInput
                    placeholder={"Иванов Иван Иванович"}
                    errorMessage={errors.name?.message}
                    name={'name'} labelText={"ФИО"}
                />
                <ControlledTextInput
                    errorMessage={errors.email?.message}
                    placeholder={"example@gmail.com"}
                    labelText={"Электронная почта"}
                    name={'email'}
                />
                <ControlledTextInput
                    errorMessage={errors.phoneNumber?.message}
                    placeholder={"+7 (000) 000-00-00"}
                    labelText={"Номер телефона"}
                    mask={"+9 (999) 999-99-99"}
                    name={'phoneNumber'}
                />
                <div className={"text-message-wrong font-medium"}>
                    {error}
                </div>
            </FormProvider>
        </Authorisation>
    )
}

export default SignIn